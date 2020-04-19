export default {
  mongo: {
    host: process.env.MONGO_HOST,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASS,
    database: process.env.MONGO_DB_NAME,
    port: parseInt(process.env.MONGO_PORT, 10),
  },
};
