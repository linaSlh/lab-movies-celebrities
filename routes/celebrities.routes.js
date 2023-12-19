
//*********************************************************************/

const express = require('express');
const router = express.Router();

// const User = require("../models/User.model");

/* GET celebrity create form page */
router.get("/celebrities/create", (req, res, next) => {
    res.render("new-celebrities")
});
/* POST celebrity create */
router.post("/celebrities/create", (req, res, next) => {

    const { name, occupation, catchPrase } = req.body;
    
});
/* GET Profile page */
// router.get("/profile", (req, res, next) => {
//     res.render("auth/profile");
// });
if (err){
    res.render(celebrities)
}

module.exports = router;