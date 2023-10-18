
// Conexion a Base de datos
// Para insertar
const { MongoClient } = require("mongodb");

async function run() {
  const uri =
    "mongodb+srv://GilM0:Gil10Macias10@cluster0.ns68tti.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const dbName = "Derma";
    const collectionName = "Users";

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const newRecipe = {
      idUser: 3,
      Name: "nombre",
      Password: "pass"
    };

    const insertResult = await collection.insertOne(newRecipe);
    console.log(`${insertResult.insertedCount} document successfully inserted.\n`);
  } catch (err) {
    console.error(`Something went wrong: ${err}\n`);
  } finally {
    // Always close the connection in a finally block to ensure cleanup
    await client.close();
  }
}

run().catch(console.dir);
