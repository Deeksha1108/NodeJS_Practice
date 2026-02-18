const { MongoClient } = require("mongodb");

const url = "mongodb+srv://deeksha:admin@cluster0.drzrsgw.mongodb.net/";
const client = new MongoClient(url);
const dbName = "hello_world";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("Users");

  const data = {
    firstName: "Deeksha",
    lastName: "Singh",
    city: "Greater Noida",
    phoneNumber: "7893764386",
  };

  //   // Create
  // const insertResult = await collection.insertOne(data);
  // console.log("Inserted documents =>", insertResult);

  //   // Read
  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);

  //   // Count
  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the User Collection =>", countResult);

  // Find all documents with a filter of firstname: Deeksha
  const res = await collection.find({ firstName: "Deeksha" }).toArray();
  console.log("result =>", res);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// Notes:
// Go to MongoDB website
// Create a free M0 cluster
// Create a User
// Get the connection string
// Install MongoDB Compass
// Create a database
// Install mongodb package
// Create a connection from code
// Documents CRUD - Create, Read, Update, Delete
