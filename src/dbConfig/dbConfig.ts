import mongoose from 'mongoose'

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!)
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connecté avec succès');
    })

  } catch (error) {
    console.log("Erreur de connexion à la base de données", error)
  }
}