var config = {
  expressPort: 3000,
  client: {
    mongodb: {
      defaultDatabase: "mern",
      defaultCollection: "users",
      defaultUri: "mongodb://mern_db_1:27017"
    }
  }
};

module.exports = config;
