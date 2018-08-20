const express = require("express");
const router = express.Router();

/*
  @ uri: GET /api/admin/test
  @ desc: test Admin routing
  @ access: Private
*/
router.get("/test", (req, res) =>
  res.json({ msg: "Users router test works." })
);

module.exports = router;
