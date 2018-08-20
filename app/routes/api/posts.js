const express = require("express");
const router = express.Router();

/*
  @ uri: GET /api/posts/test
  @ desc: test Posts routing
  @ access: Public
*/
router.get("/test", (req, res) =>
  res.json({ msg: "Posts router test works." })
);

module.exports = router;
