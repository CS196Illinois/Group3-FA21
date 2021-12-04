// import database from "placeholder";

const databaseConfig = {
    apiKey: "placeholder",
    authDomain: "placeholder",
    databaseURL: "placeholder",
    projectId: "placeholder",
    storageBucket: "placeholder",
    messagingSenderId: "placeholder4",
    appId: "placeholder",
    measurementId: "placeholder"
  };

const databaseApp = database.initializeApp(databaseConfig);
const database = databaseApp.firestore();


export default database;