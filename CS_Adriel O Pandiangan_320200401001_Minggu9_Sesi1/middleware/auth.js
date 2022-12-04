const jwt = require("jsonwebtoken");

const config = process.env;

const Auth = {
  verifyToken(req, res, next) {
    //untuk kebutuhan postman
    const tokenPM = req.cookies['jwt'];
    
    //untuk kebutuhan frontend
    //const {token} = req.body;
    if((tokenPM = "" || !tokenPM)){
      const {token} = req.body;
    }
    
 
    
    console.log(token)


    if (token) {
      // 12. Lalukan jwt verify
      //kebutuhan postman
      //const decodePM =jwt.verify(tokenPM, config.SECRET);
      
      const decode = jwt.verify(token, config.SECRET);
      
      //kebutuhan postman
      //req.verified = decodePM
      req.verified = decode
      
      
      return next()
      
    } else {
      res
        .status(403)
        .send({ message: "Youre not authenticated, please login first" });
      console.log("You are not authenticated");
    }
  
  },
};

module.exports = Auth;
