const express = require("express");
const registerApi = require("./register");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ message: "API -- hejhej" });
// });
router.use(registerApi);
module.exports = router;
