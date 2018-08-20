const express = require("express");
const router = express.Router();

/*
  @ uri: GET /api/profiles/test
  @ desc: test Profiles routing
  @ access: Public
*/
router.get("/test", (req, res) =>
  res.json({ msg: "Profiles router test works." })
);

module.exports = router;
