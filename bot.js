const { Client, Collection } = require('discord.js');
const { http } = require('http');
const { readdirSync } = require('fs');
const { TOKEN, PREFIX, DEFAULT_COOLDOWN } = require('./configuration/config.js');

/**
	* Classe initialisant le bot Discord
	* @class Client
  * @author Kévin Borderon	
	*/
const client = new Client();

/** Initialisation des tableaux :
 * 1) des commandes présentes dans le dossier commandes et de ses sous-dossiers
 * 2) des délais associés à chacune des commandes que l'on récupère
 */
["commandes", "cooldowns"].forEach(x => client[x] = new Collection());

/** 
 * Initialisation et récupération des fichiers cibles présents dans les différents répertoires 
 * @author Kévin Borderon
 * @param {string} repertoire - Le répertoire contenant l'ensemble des commandes à récupérer
 */
const chargerCommandes = (repertoire = "./commandes/") => {
	readdirSync(repertoire).forEach(repertoires => {
		/* Récupération des fichiers .js comportant les commandes du bot */
		const commandes = readdirSync(`${repertoire}/${repertoires}/`).filter(fichiers => fichiers.endsWith(".js"));

		/* Activation de chacune de nos commandes */
		for(const fichier of commandes){
			const getNomFichier = require(`${repertoire}/${repertoires}/${fichier}`);
			/* Mise à jour de notre tableau commandes */
			client.commandes.set(getNomFichier.help.nom, getNomFichier);
			console.log(`Commande chargée : ${getNomFichier.help.nom}`);
		};
	});
};

chargerCommandes();
		
/**
 * Évènement message
 * @author Kévin Borderon
 * @event Client#message
 * @type {object}
 * @property {Message} message - Le message reçu par le bot
 */
client.on('message', message => {
  /* Récupération des arguments passés en paramètre lors de la saisie d'une commande */
	const args = message.content.slice(PREFIX.length).split(/ +/);

	/* Correspond au premier argument, il s'agit obligatoirement du nom de notre commande à utiliser */
	const nomCommande = args.shift().toLowerCase();

	/* On récupère la commande associée au nom de la commande saisie précédemment */
	const commande = client.commandes.get(nomCommande) || client.commandes.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(nomCommande));

  /* On bloque la commande selon les critères suivants :
	 *	1) La commande ne commence pas par le préfix défini ;
	 *  2) La commande a été exécutée par le bot, on choisit donc de l'ignorer ;
	 *  3) La commande n'est pas répertoriée que ce soit par son nom par défaut ou aliases
   */
	if(!message.content.startsWith(PREFIX) || message.author.bot || !commande){
		return;
	}

	if(commande.help.args && !args.length){
		let reponseNoArgs = `Pour utiliser cette commande, il nous faut des arguments, ${message.author} !`;

		if(commande.help.utilisation){
			reponseNoArgs += `\nVoici comment utiliser correctement la commande : \`${PREFIX}${commande.help.nom} ${commande.help.utilisation}\``
		}

		return message.channel.send(reponseNoArgs);
	}

  /* Ajout de notre commande dans la liste des cooldowns si celle-ci n'a encore jamais été utilisée pour le moment */
	if(!client.cooldowns.has(commande.help.nom)){
		client.cooldowns.set(commande.help.nom, new Collection());
	}

	const tempsActuel = Date.now();
	const	tStamps = client.cooldowns.get(commande.help.nom);
	const quantiteCooldown = (commande.help.cooldown || DEFAULT_COOLDOWN) * 1000;  /* Conversion en ms */

	/* Actualisation des cooldowns */
	if(tStamps.has(message.author.id)){
		const tempsExpirationCooldown = tStamps.get(message.author.id) + quantiteCooldown;

		if(tempsActuel < tempsExpirationCooldown) {
			tempsAttente = (tempsExpirationCooldown - tempsActuel) / 1000;

			return message.reply(`Merci d'attendre ${tempsAttente.toFixed(0)} seconde(s) avant d'utiliser de nouveau la commande \`${commande.help.nom}\`.`);
		}
	}

	/* Actualisation du temps depuis la dernière commmande identique utilisée par l'utilisateur */
	tStamps.set(message.author.id, tempsActuel);

	/* Suppression de la collection lorsque l'utilisateur peut se servir de nouveau de la commande */
	setTimeout(() => tStamps.delete(message.author.id), quantiteCooldown);

  /* On appelle l'exécution de la commande */
	commande.run(client, message, args);
});

/**
 * Évènement ready
 * @author Kévin Borderon
 * @event Client#ready
 * @type {object}
 * @property {} - Renvoie l'indication de connexion du bot
 */
client.on('ready', () => console.log('\nConnexion du bot ...'));

/* Connexion de notre bot à notre serveur Discord */
client.login(TOKEN);
