const express= require("express");

const router= express.Router();

const registerUser= require("./userController");//ye yaha par humne post method ka ek fuction import kr liya hain simply

router.route("/register").post(registerUser);

module.exports =router;

