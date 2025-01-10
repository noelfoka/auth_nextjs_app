# Next Auth app

## Dépendances

- axios
- bcryptjs
- jsonwebtoken
- nodemailer
- react-hot-toast
- mongoose (mongodb)

## Base de données: mongodb

- connection de mongodb
  - dans la variable d'environnement
  avoir: mongo_url, TOKEN_SECRET, domain
  - A partir du dossier ``scr``, creer un dossier ``dbConfig`` et y mettre le fichier ``dbConfig.ts`` puis ajoute ce code: