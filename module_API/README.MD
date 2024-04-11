## A rendre

Une API REST avec NodeJS et ExpressJS :

- [x] Créer un projet NodeJS
- [x] Installer ExpressJS
- [x] Creer un serveur ExpressJS
- [x] Installer Mongoose et se connecter à une base de données MongoDB
- [x] Organiser son projet avec des routes et des middlewares
- [x] Utiliser le pattern MVC
- [x] Créer une authentification avec JWT
- [x] Proteger une route (creation d'un middleware qui verifie le token)
- [] Mettre en place une API DOC avec Swagger
- [x] Gerer les erreurs avec un middleware

- [] Creer un fichier Readme.md qui explique le projet, comment l'installer, comment l'utiliser, les dépendances, les routes, etc.

- [] Avec Jest et superTest, creer des tests unitaires et d'integration pour les routes et les middlewares, une de vos series de tests doit representer un exemple d'utilisation de l'API depuis un hypothetique client. Concretement, si votre application permet a des utilisateurs authentifier d'acheter des articles voici un exemple de liste d'endpoints a tester de facon successive pour effectuer un test d'achat:

- POST /auth/login

- POST /panier/add

- POST /panier/checkout

- POST /order

- [ ] Ajoutez une fonctionnalité qui fait intervenir la possibilités d'upload de fichiers (images, pdf, etc) et ajoutez des tests pour cette fonctionnalité.

## Informations requises sur le projet

- la techno utiliser dans le projet est Node.js
- les langages principale utiliser dans le projet sont JavaScript.

- toutes les requetes a tester dans thunder client ou postman sont dans le fichier app.http
