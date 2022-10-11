//ye poora function hain post method ka jisko store kr diya hai registerUser mai and phir usko export kr diya
const registerUser= (req,res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    res.json({
        success: true,
    });
};
 
module.exports =registerUser;