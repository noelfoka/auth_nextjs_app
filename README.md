# Next Auth app

## Dépendances

- axios
- bcryptjs
- jsonwebtoken
- nodemailer
- react-hot-toast
- mongoose (mongodb)
- chadcn

## Base de données: mongodb

- connection de mongodb
  - dans la variable d'environnement
  avoir: mongo_url, TOKEN_SECRET, domain
  - A partir du dossier ``scr``, creer un dossier ``dbConfig`` et y mettre le fichier ``dbConfig.ts`` puis ajoute ce code:

    ```ts
    import mongoose from 'mongoose';
    export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!)
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connecté avec succès');
    })

    connection.on('erreur', (err) => {
      console.log('Erreur de connexion à la base de données', err);
      process.exit();
    })

  } catch (error) {
    console.log("Erreur de connexion à la base de données", error)
  }
}
    ```