const express = require("express");
const router = express.Router();
const models = "./models";
const userLogic = require("../common/userLogic");

router.post('/', async (req, res, next) => {
    console.log('received login req');
    const existingUser = await userLogic.getUserByEmail(req.body.email);
    console.log("existing user");
    console.log(existingUser);
    const newUser = req.body;
    // console.log()
    if (!existingUser) {
      userLogic.createUser(newUser);
    }
    //check if email already exists


  });

router.get('/test', (req,res, next) => {

  console.log("success");
});

module.exports = router;