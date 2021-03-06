# ChappyBot

<div align="center">
	<img width="300" alt="Logo ChappyBot" src="https://i.goopics.net/Zo7db.png">
</div>

[![Demandez moi n'importe quoi !](https://img.shields.io/badge/Demandez%20moi-n'%20importe%20quoi-1abc9c.svg)](https://github.com/kBorderon/ChappyBot/issues) 
[![GitHub license](https://img.shields.io/github/license/kBorderon/ChappyBot.svg?label=licence)](https://github.com/kBorderon/ChappyBot/blob/master/LICENSE)	
[![Heroku](https://img.shields.io/badge/Déploiement%20sur%20-Heroku-997fbc.svg?logo=Heroku)](https://heroku.com)
[![Discord](https://img.shields.io/discord/711298566425018440.svg?label=Discord&logo=Discord&colorB=7289da)](https://discord.com/invite/u6pGvbG)
[![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%FkBorderon%2FChappyBot)](https://twitter.com/intent/tweet?text=@Kevin_Borderon%20Projet%20ChappyBot:&url=https://github.com/kBorderon/ChappyBot)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/fb60425650e94ae7bcd4fe9dddb651a7)](https://www.codacy.com/manual/kBorderon/ChappyBot?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kBorderon/ChappyBot&amp;utm_campaign=Badge_Grade)
[![discord.js](https://img.shields.io/badge/discord.js-v12.0.0--dev-blue.svg?logo=npm)](https://github.com/discordjs)
[![GitHub issues](https://img.shields.io/github/issues/kBorderon/ChappyBot.svg)](https://github.com/kBorderon/ChappyBot/issues) 
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/kBorderon/ChappyBot.svg)](https://github.com/kBorderon/ChappyBot/issues?q=is%3Aissue+is%3Aclosed)

## Sommaire
	
1. [Présentation](#presentation)
2. [Prérequis](#prerequis)
3. [Installation du bot](#installation)
4. [Configuration du bot](#configuration)
5. [Activation du bot](#activation)
6. [Utilisation du bot](#utilisation)
7. [APIs externes](#apis)
8. [Questions et demandes](#questions)

## Partie 1 - Présentation <a name="presentation"></a>

Ce projet consiste en la réalisation d'un bot Discord, appelé ChappyBot. Ce dernier devra réaliser différentes interactions (commandes), nous utiliserons différentes API afin d'améliorer ses capacités de fonctionnement. 
Ce bot sera exécuté depuis un Raspberry Pi, mais vous pouvez le lancer depuis n'importe quelle autre plateforme (Windows, Mac, Linux, autre carte de développement). 
Pour la réalisation de ce projet, je me suis basé sur les guides et tutoriels de création de bot de la chaîne Youtube [**getCodingKnowledge**](https://www.youtube.com/channel/UCUjo_IKa9Cqkx_x-rMly8MA "lien vers la chaîne Youtube de getCodingKnowledge").  

> #Nouveautés : 
> - Déploiement du bot sur la plateforme Heroku ; 
> - Serveur Discord de test pour un accès au public [**ChappyBot Communauté**](https://discord.com/invite/u6pGvbG "Invitation pour rejoindre le serveur discord") ;
> - Utilisation de [**Blagues API**](https://www.blagues-api.fr/ "API utilisée pour la commande blague") pour notre nouvelle commande blague ;
> - Utilisation de [**WeatherAPI**](https://www.weatherapi.com/ "API utilisée pour la commande meteo") pour notre nouvelle commande meteo Version 2 finale.

> #FutursDéveloppements : 
> - Enregistrement d'un débat au sein du discord ;
> - Consultation des débats disponibles, enregistrés au format mp3 et stockés sur la machine lançant le bot ;
> - Création de commandes musicales + radio ;
> - Création de mini-jeux et système de classement + expérience ;
> - Retour des anniversaires du jour ;
> - Consultation du profil et différents éléments d'un profil d'un joueur (API League of Legends - Riot Games) ;
> - Autres, à voir en fonction des demandes :).

> Si vous souhaitez tester ce bot discord, je vous invite à rejoindre le serveur Discord ci-dessous. Le bot y est déployé grâce à la plateforme **[Heroku](https://www.heroku.com/)**. **Si le bot est déconnecté (version gratuite d'Heroku), merci de m'envoyer un message privé, pour que je le réactive.**  

[![Discord API](https://discord.com/api/guilds/711298566425018440/embed.png?style=banner3)](https://discord.com/invite/u6pGvbG)

### Auteur 

**Borderon Kévin**

## Partie 2 - Prérequis <a name="prerequis"></a>
Vous devez au préalable, avoir installé sur votre machine Git et Node.js.   
Pour savoir si vous possédez git, tapez la commande dans un terminal : **git --version** (vous devriez voir apparaître la version de git sinon une erreur).  
Pour savoir si vous possédez nodejs, tapez la commande **node --version** (vous devriez voir apparaître la version de node sinon une erreur) et pour npm : **npm --version** (pareil, obtention de sa version ou erreur).

## Partie 3 - Installation du bot <a name="installation"></a>

Une fois avoir cloné ce dépôt git. Placez vous sur la branche que vous souhaitez récupérer (**git checkout <nom_branche>**), déplacez-vous sur cette branche (**git branch <nom_branche>**) puis récupérez le contenu présent sur le dépôt git (**git pull**).  
> Pour récupérer le contenu du bot discord, veuillez vous déplacer sur une autre branche que la master, celle-ci ne présente que le projet.   
> Par exemple, si nous souhaitons récupérer le contenu de la branche version_1, nous devons faire **git checkout version_1** (suivez ensuite les autres commandes).  

Une fois la branche récupérée, placez-vous dans le dossier bot-discord. Executez la commande **npm install**, puis **npm run docs**.  

L'arborescence du dossier, devra être la suivante :

```
\ 
	\ bot-discord
		\commandes
		\configuration
		\contenu
		\docs
		\evenements
		\node_modules
		- bot.js
		- jsdoc.json
		- package.json
		- package-lock.json
		- README.md
```

### Arborescence du projet

| Élément									| Description																																									|
| :-------------------		| :---------------------------------------------------------------------------------------		|
| `/bot-discord` 					| Répertoire du projet du bot discord 																												| 
| `/commandes`						| Répertoire contenant des sous-dossiers, qui comportent nos fichiers commandes .js 					|
| `/configuration`				| Répertoire contenant nos fichiers de configuration pour les API que nous allons utiliser	 	|
| `/contenu`							| Répertoire contenant les différents fichiers (image etc.) utilisés par nos commandes 				|
| `/docs`									| Répertoire contenant notre documentation, ouvrez index.html dans votre navigateur 					|
| `/evenements`						| Répertoire contenant les évènements de notre bot																						|
|	`/node_modules` 				| Répertoire contenant les modules node nécessaires pour notre bot 														|
| `bot.js`								| Fichier principale qui lance l'exécution de notre bot 																			|
| `jsdoc.json`						| Fichier de configuration pour le module Jsdoc, réalisant notre documentation 								|
| `package.json`					| Fichier de configuration, permettant l'installation des modules node nécessaires 						| 
| `package-lock.json` 		| Fichier généré lorsque l'on utilise la commande npm install dans le dossier bot-discord 		|	
| `README.md`							| Fichier présentant le projet de notre bot Discord 																					|

Si vous souhaitez plus de détails, n'hésitez pas à regarder directement les fichiers ou à me contacter.  

## Partie 4 - Configuration du bot <a name="configuration"></a>

Comme je le disais plus haut, ce bot sera présent sur un Raspberry Pi. Pour pouvoir créer et customiser votre propre bot personnel, je vous invite à consulter la première partie ce tutoriel en Anglais [Creating a Bot Account](https://discordpy.readthedocs.io/en/latest/discord.html "lien du tutoriel Anglais"), celle qui présente la création du Bot sur la plateforme Discord dédiée aux développeurs.  
Vous pouvez également trouver d'autres tutoriels en Français ou dans une autre langue concernant la création d'un bot.  

Une fois votre bot créé, customisé (nom, image etc.), vous **devez modifier le fichier config.js avant l'utilisation du bot, remplacez <votre_token> par le token de votre bot** présent sur la plateforme où vous avez créé une application et un bot. Le token se situe à l'emplacement suivant : onglet Bot, Build-A-Bot et Token, copiez le token présent dans notre fichier. D'autres tokens liés aux APIs, devront être ajoutés afin de pouvoir utiliser le bot à 100%, veuillez suivre les indications à côté des tokens en question.   

Votre bot est dorénavant lié à ce projet, il utilisera ce qui y sera développé (faites des gits pull régulièrement) en plus de ce que vous développerez. Pour ajouter votre bot à un serveur Discord, je vous invite à consulter le tutoriel précédent.

## Partie 5 - Activation du bot <a name="activation"></a>

Pour activer le bot, **placez-vous dans le dossier bot-discord, puis exécutez la commande : node bot.js**, vous devriez voir les commandes chargées, ainsi que le message connexion du bot ...  
Tant que votre terminal sera ouvert avec la commande précédente saisie, le bot fonctionnera, nous vous indiquerons plus tard comment lancer en arrière-plan le bot.

## Partie 6 - Utilisation du bot <a name="utilisation"></a>

Pour utiliser correctement le bot, vous devez écrire dans un channel de votre discord **?nom_commande <argument_1> <argument_2> (etc. d'autre arguments si nécessaires)**. La première commande que je vous invite à tester est la commande **?help**. Cette commande vous indiquera l'ensemble des commandes disponibles sur votre serveur Discord.  
Pour connaître l'utilisation d'une commande, veuillez écrire : **?help <nom_commande>**, par exemple **?help ping** vous décrira le fonctionnement de **?ping**.

Liste des commandes actuelles : 

|	Nom de la commande	|	Statut du développement			| Catégorie 	|	Description																																		|
|	:-----------------	|	:------------------------		| :---------	|	:--------------------------------------------------------------------------		|
|	feed								| terminé											| Même				| Renvoie l'image d'un collaborateur ayant feed																	| 
|	rage								| terminé											| Même				| Renvoie l'image de l'utilisateur rageant 																			|
|	sel									| terminé											| Même				|	Renvoie l'image de l'utilisateur salant																				|
|	help								|	terminé											| Serveur			| Renvoie l'utilisation d'une ou des commandes présentes en message privé 			|
|	membres							|	terminé											|	Serveur			| Renvoie les informations concernant les membres présents sur ce serveur 			|	
|	ping								| terminé											| Serveur			| Renvoie la latence du bot																											|
|	roles								| terminé											| Serveur			| Renvoie les rôles disponibles sur ce serveur																	|
| userinfos						| terminé											| Utilisateur | Renvoie les informations d'un utilisateur mentionné														|
| userroles						| terminé											| Utilisateur	| Renvoie les rôles de l'utilisateur mentionné																	|
|	blague							| terminé											|	Utilitaire	| Renvoie une blague aléatoirement																							|
| cat									| terminé											| Utilitaire	| Renvoie une image ou un gif aléatoire d'un chat																|
|	debat								| en cours										|	Utilitaire	|	Création d'un débat et de son enregistrement audio														|
| dog									| terminé											| Utilitaire	| Renvoie une image ou un gif aléatoire d\'un chien															|
| meteo								| terminé 										| Utilitaire	| Renvoie la météo pour une ville précise																				|
|	projet							|	terminé											|	Utilitaire	| Renvoie le lien du projet GitHub bot-discord																	|
|	statutDebat					|	en cours										| Utilitaire	| Renvoie le statut du débat actuel																							|
| stopDebat						| en cours										| Utilitaire	| Arrête le débat en cours et de son enregistrement audio												|

D'autres commandes viendront s'ajouter au fur et à mesure.  

## Partie 7 - APIs externes <a name="apis"></a>
### [**Blagues API**](https://www.blagues-api.fr/ "API utilisée pour la commande blague") 

Pour la création de notre commande **?blague aucun argument ou <type_blague> parmi ['beauf', 'blondes', 'dark', 'dev', 'global', 'limit']**, nous avons utilisé [**Blagues API**](https://www.blagues-api.fr/ "API utilisée pour la commande blague"), vous trouverez ci-dessous deux exemples de cette commande.

**?blague**  
<img alt="Blague aléatoire (sans précision du type désiré)" src="https://i.goopics.net/0DxE2.png">

**?blague dev**  
<img alt="Blague aléatoire (précision du type désiré)" src="https://i.goopics.net/Y2lax.png">

### [**WeatherAPI**](https://www.weatherapi.com/ "API utilisée pour la commande meteo")

Pour la création de notre commande **?meteo <nom_ville>** ou **?meteo <nom_ville>, <nom_pays>**, nous avons utilisé [**WeatherAPI**](https://www.weatherapi.com/ "API utilisée pour la commande meteo"), vous trouverez ci-dessous deux exemples de cette commande, un cas de villes homonymes dans 2 pays distincts.

**?meteo Vay** => l'API pointera sur la ville de Vay en Inde.  
<img alt="Météo pour la ville de Vay en Inde" src="https://i.goopics.net/vgrqA.png">

**?meteo Vay, France**  
<img alt="Météo pour la ville de Vay en France" src="https://i.goopics.net/lNlyA.png">

### [**TheCatAPI**](https://thecatapi.com/ "API utilisée pour la commande cat")

Pour la création de notre commande **?cat aucun argument ou <categorie_chat> parmi ['boxes', 'clothes', 'hats', 'sinks', 'space', 'sunglasses', 'ties']**, nous avons utilisé [**TheCatAPI**](https://thecatapi.com/ "API utilisée pour la commande cat"), vous trouverez ci-dessous deux exemples de cette commande.

**?cat**  
<img alt="Image de chat aléatoire (sans précision de la catégorie désirée)" src="https://i.goopics.net/n42YQ.png">

**?cat boxes**  
<img alt="Image de chat aléatoire (précision de la catégorie désirée)" src="https://i.goopics.net/wkgr3.png">

### [**TheDogAPI**](https://thedogapi.com/ "API utilisée pour la commande dog")

Pour la création de notre commande **?dog**, nous avons utilisé [**TheDogAPI**](https://thedogapi.com/ "API utilisée pour la commande dog"), vous trouverez ci-dessous un exemple de cette commande.

**?dog**  
<img alt="Image de chien aléatoire (sans précision de la catégorie désirée)" src="https://i.goopics.net/Y21VA.png">

## Partie 8 - Questions et demandes <a name="questions"></a>

>Si vous avez des questions ou des demandes d'ajout sur le bot, n'hésitez pas à me contacter grâce à :  
>- mon mail (Cf. mon [**profil GitHub**](https://github.com/kBorderon "lien vers mon profil Github")) ;
>- mon compte Twitter : [**@Kevin_Borderon**](https://twitter.com/Kevin_Borderon "Lien vers mon profil Twitter") ; 
>- mes issues associées au projet [**bot discord**](https://github.com/kBorderon/bot-discord/issues "Lien vers les issuers du dépôt GitHub").


