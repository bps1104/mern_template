var config = {
  expressPort: 8080,
  client: {
    mongodb: {
      defaultDatabase: "mern",
      defaultCollection: "users",
      defaultUri: "mongodb://localhost:27017"
    }
  }
};

module.exports = config;
