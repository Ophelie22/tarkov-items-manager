# Cahier des charges

## Présentation du "Tarkov Items Manager"

* Présentation du jeu

Le concept de Tarkov est simple : quand le joueur lance une partie, il apparaît sur une carte et doit se rendre d’un point A à un point B. Au cours de sa partie, il doit survivre aux autres joueurs et IA présents sur la carte, mais aussi ramasser des objets afin de compléter divers objectifs et ainsi progresser dans le jeu.

Tarkov est considéré comme un jeu « hardcore », c’est-à-dire qu’il y a une volonté de la part de son éditeur, Battlestate games, de ne pas trop guider le joueur dans sa progression. Le jeu compte plus de 1600 objets qui peuvent être récupérés par le joueur au cours de ses parties, et le joueur ne dispose par exemple d’aucune aide lui permettant de visualiser en cours de partie les objets dont il a besoin.

Aujourd’hui, il existe une multitude d’outils qui ont été créés par la communauté (qui a franchi récemment le cap des 200 000 joueurs en simultané) permettant de palier au manque de certaines informations dans le jeu pouvant perturber les débutants.


![planque](https://user-images.githubusercontent.com/48985950/87245801-bc0ed700-c448-11ea-9c59-0ecf8a6f1e13.png)
Ecran de présentation général de la plaque (hideout)

![inventaire](https://user-images.githubusercontent.com/48985950/87245804-c9c45c80-c448-11ea-89db-38e5e2624960.png)
Ecran d'amélioration d'un élément (ventilation)

![dealer_quetes](https://cdn.discordapp.com/attachments/742721528428494899/743511443437125714/2020-08-1318-45_1.png)
Ecran de sélection des quêtes chez le dealer

![quetes](https://cdn.discordapp.com/attachments/742721528428494899/743511444666056754/2020-08-1318-45_0.png)
Ecran de suivi des quêtes en jeu

* Présentation de l'application

Cette application (s'affichant sur un second écran en plus du jeu en lui même) a pour vocation d'aider le joueur dans sa progression et lui donner des repères visuels sur son avancement.

## Objectif du projet

Sachant qu'il n'y a pas d’infos en cours de partie sur certains indicateurs, on veut apporter une réponse aux joueurs qui se posent (par exemple) les questions suivantes :

* "Combien de moteurs me manque t'il pour améliorer le système électrique au niveau 3?"
* "Combien de fils dois-je ramasser pour améliorer l'éclairage de la planque au niveau 2?" 

Créer une application qui permettra d’avoir un suivi des objets essentiels à garder en jeu afin de pouvoir faire progresser leur personnage.

## Public visé

Cette application va s’adresser aux joueurs d’Escape from Tarkov “débutants” ou qui souhaitent avoir un suivi de leurs quêtes et/ou de l’avancée de l’amélioration de leur planque.

## MVP

* Système de login
* Page "Mon Compte"
* Recherche d’objet
* Système de filtrage et de tri
* Sauvegarder les données générées par les utilisateurs

## Fonctionnalitées

* Consulter / créer / modifier / supprimer son compte / récupérer son mot de passe
* Sélectionner quête(s) / élément(s) de la planque à suivre
* Trier par type / marchand / prix des objets / prix par case
* Afficher nom, image, le prix des objets, prix par case, marchand, emplacement(s)
* Incrémenter / décrémenter le nombre total de l’objet
* Mettre en favori

## Potentielles évolutions

* Pouvoir mettre des objets en favori
* Activer des alertes (disponibilité, prix)
* Priorisation dans les quêtes selon le besoin (argent, objets de valeurs, XP)
* Traduction multilangue
* Carte interactive avec emplacement des quêtes
* Graphiques d’évolution des prix des objets sur le marché
* Pouvoir partager une page qui résume la progression d’un compte via une URL personnalisée
* Créer une “page joueur” ou l’utilisateur pourrait renseigner des informations sur sa partie
* Carte interactive avec emplacements des objectifs de quêtes
* Avoir un aperçu des clés que l'on posséde pendant la partie


## Liste des technos choisies

* Front-End
   * React
   * Redux
   * Semantic Ui
   
==> Meilleur techno pour gérer l'affichage dynamique dont notre app aura besoin 
  
* Back-End
   * Node.js
   * Express
   * Postgres
   
 ==> Seules technos que nous connaissons

* Service tiers
  * API "tarkov-market" https://tarkov-market.com/dev/api
  
 ==> API nous permettant de récupérer des données en rapport avec le jeu, cette API n'accède pas et ne modifie pas les données du jeux en lui même.

## Rôles

* Product Owner
  * Pierre CAHUZAC
  
* Scrum Master / Lead Dev Front
  * Quentin TAVERNARI
  
* Lead Dev Back
  * Romain GENEAU
  
* Git Master
  * Jason SEJEAN

## Arborescence de l'application

![arbo](https://cdn.discordapp.com/attachments/742721528428494899/743491917894910082/Arborescence_3.jpg)

## Routes
* Front
  * /
  * /items
  * /quests_items
  * /hideout_items
  * /notice
  * /contact
  * /account
* Back
  * /user
  * /user/:id
  * /item
  * /item/:id
  * /hideout_objective
  * /hideout_objective/:id
  * /quest
  * /quest/:id
  * /dealer
  * /dealer/:id

## WireFrame

https://whimsical.com/LzjhDoyTtgqAvZGSVUnABY


## MCD / MLD (via mocodo.wingi.net)

* MCD

![mcd](https://raw.githubusercontent.com/O-clock-Galactica/projet-compagnon/1c62d2de0e5a068f28c38046883d7a29a7992dbb/MCD%20-%20MLD/Items.svg?token=AO256FIJ35UMISOIKE5FFX27G23U2)

```
DEALER: name
APPARTIENT_Q, 0N ITEM, 0N QUEST : quantity
ITEM: name, img_url, dealer
APPARTIENT_H, 0N ITEM, 1N HIDEOUT_OBJECTIVE : quantity
 
MET A DISPOSITION, 11 QUEST, 1N DEALER
QUEST: name, xp, done
STOCKE, 0N ITEM, 0N USER : quantity
HIDEOUT_OBJECTIVE: name, level, done
 
:
MET_FAVORIS_Q,  0N USER, 0N QUEST: 
USER: email, password
MET_FAVORIS_H, 0N USER, 0N HIDEOUT_OBJECTIVE : 
```

* MLD
```
APPARTIENT_Q ( name, name.1, quantity )
ITEM ( name, img_url, dealer )
APPARTIENT_H ( name, name.1, quantity )
QUEST ( name, xp, done, name.1 )
STOCKE ( name, email, quantity )
HIDEOUT_OBJECTIVE ( name, level, done )
MET_FAVORIS_Q ( email, name )
USER ( email, password )
MET_FAVORIS_H ( email, name )
```


## Analyse des relations

* Item < -- > User
   * Un user stocke des items
   * verbe : stocker
   * cardinalité :
   * User > Item : un user peut stocker au minimum 1 item et au maximum N items.
   * Item > User : un Item peut être stocké par au minimum 1 user et au maximum 1 user.
 
* Item < -- > Hide_Out_Objectif
   * Un item appartient à un ou des Hide_Out_Objectif
   * verbe : appartenir
   * cardinalité :
   * Hide_Out_Objectif > Item : un Hide_Out_Objectif peut contenir au minimum 1 item et au maximum N items.
   * Item > Hide_Out_Objectif : un Item peut appartenir à au minimum 1 Hide_Out_Objectif et au maximum N Hide_Out_Objectif.
 
 * Item < -- > Quest
   * Un item appartient à une ou des Quest
   * verbe : appartenir
   * cardinalité :
   * Quest > Item : un Quest peut contenir au minimum 1 item et au maximum N items.
   * Item > Quest : un Item peut appartenir à au minimum 0 Quest et au maximum N Quest.
 
* User < -- > Hide_Out_Objectif
   * Un user met en favori  un ou des Hide_Out_Objectif
   * verbe : mettre en favori
   * cardinalité :
   * User > Hide_Out_Objectif  : un user peut mettre en favori au minimum 0 Hide_Out_Objectif  et au maximum N Hide_Out_Objectif .
   * Hide_Out_Objectif > User : un Hide_Out_Objectif  peut être mis en favori par au minimum 0 user et au maximum 1 user.
  
* User< -- > Quest
   * un user favorise une quête
   * verbe: mettre en favoris
   * cardinalité :
   * User > Quest : un user peut mettre en favoris au minimum 0 Quest et au maximum N Quest
   * Quest > User: une Quest peut être mise en favoris au minimum par 0 User et au maximum 1 User
 
*  Dealer < -- > Quest
   * verbe: Met à disposition
   * cardinalité : 1N
   * Dealer > Quest : un dealer met à disposition au minimum 1 Quest et au maximum N Quest.
   * Quest > Dealer : une Quest est mis à disposition par au minimum 1 Dealer et au maximum par 1 Dealer.
   
## Dictionnaire de donnée

https://docs.google.com/spreadsheets/d/1bsYGYAkFeFyw_-NHeLc9yFbuDT2j3YHnvo3TYmGow1Y/edit#gid=0

## Users Stories

https://docs.google.com/spreadsheets/d/1DSyblb1rD_09LkZcV07chaKNU1GsBMRYkgGDQsS_tYo/edit#gid=0

## Ressources / liens
 
* https://vonguru.fr/2017/10/13/escape-from-tarkov-simulation-qui-vous-veut-du-mal/
  * Description sommaire du principe du jeu
* https://escapefromtarkov-fr.gamepedia.com/Planque
  * Visuel évolutif de la planque
* https://tarkov-market.com/dev/api
  * Utilitaire de gestion des prix et objets en temps réel des items dans le marché, c'est l'API avec laquelle nous allons travailler
* https://escapefromtarkov-fr.gamepedia.com/Qu%C3%AAtes
  * Visuel qui nous permettra d'implémenter les quêtes nécessaires à l'application
* https://tarkov-database.com/about
  * Nous souhaitions utiliser cette API en supplément, mais nous sommes en attente de réponse du créateur de l'api 
* https://www.eftdb.one/traders
  * Idée retenue pour le design de l'application
* https://trello.com/invite/b/Ddfg1ADw/1d1c9d31226a95b6760301125c90eb78/trello-apotheose
  * Gestion de projet 
