/** Routes for authentication. */

const User = require("../models/user");
const express = require("express");
const router = new express.Router();
const createToken = require("../helpers/createToken");

// Login Route
router.post("/login", async function(req, res, next) {
  try {
    const user = await User.authenticate(req.body);
    const token = createToken(user);
    return res.json({ token });
  } catch (e) {
    return next(e);
  }
});

router.get("/ping", async function(req, res, next) {
  
    return res.json({ msg: "success" });

});

module.exports = router;