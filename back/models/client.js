import "dotenv/config";

import { Sequelize } from "sequelize";

 export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'postgres',
    }
  );

  // Fonction qui attend que la base soit prête
const waitForDB = async () => {
    let connected = false;
    while (!connected) {
      try {
        await sequelize.authenticate();
        console.log("✅ Base de données connectée.");
        connected = true;
      } catch (err) {
        console.log("⏳ Attente de la base... Nouvelle tentative dans 2s");
        await new Promise((res) => setTimeout(res, 2000));
      }
    }
  };

  export const syncDB = async () => {
    await waitForDB();
    await sequelize.sync({ alter: true });
    console.log("✅ Tables synchronisées.");
  };