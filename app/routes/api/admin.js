const express = require("express");
const router = express.Router();

/*
  @ uri: /api/admin/test
  @ Usage: 
  @ access: 
  @ last update: 
*/
router.get("/test", (req, res) =>
  res.json({ msg: "admin router test works." })
);

module.exports = router;
