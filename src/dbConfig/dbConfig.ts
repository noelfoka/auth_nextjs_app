import mongoose from 'mongoose';

// Définition d'une fonction asynchrone nommée `connect` pour établir une connexion à la base de données MongoDB.
export async function connect() {
  try {
    // Tentative de connexion à MongoDB en utilisant l'URL spécifiée dans les variables d'environnement.
    // `process.env.MONGO_URL` est utilisé pour récupérer l'URL de connexion depuis les variables d'environnement.
    mongoose.connect(process.env.MONGO_URL!);

    // Récupération de l'objet de connexion créé par mongoose.
    const connection = mongoose.connection;

    // Ajout d'un gestionnaire d'événement pour l'événement 'connected'.
    // Cet événement est déclenché lorsque la connexion à MongoDB est établie avec succès.
    connection.on('connected', () => {
      console.log('MongoDB connecté avec succès');
    });

    // Ajout d'un gestionnaire d'événement pour l'événement 'error'.
    // Cet événement est déclenché en cas d'erreur lors de la tentative de connexion ou pendant une session.
    connection.on('erreur', (err) => {
      console.log('Erreur de connexion à la base de données', err);
      
      // Si une erreur survient, le processus Node.js est arrêté pour éviter un état instable.
      process.exit();
    });

  } catch (error) {
    // Gestion des erreurs au cas où la tentative de connexion initiale échoue.
    console.log("Erreur de connexion à la base de données", error);
  }
}
