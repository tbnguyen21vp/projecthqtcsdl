const jwt = require('jsonwebtoken');
const authTokenCheck = async (req, res, next) => {
    const authorizationHeader = req.header("Authorization");
    if (!authorizationHeader) {
      return res.status(401).json({ message: "Khong tim thay access token!" });
    }
    const accessToken = authorizationHeader.replace("Bearer ", "");
    try {
      const secret = process.env.ACCTOK_SK;
      const decodedToken = jwt.verify(accessToken, secret);
      
      if (!decodedToken) {
        return res.status(401).json({ error: "Wrong token" });
      }
      if (!decodedToken.userId || !decodedToken.userRole) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      
      req.userId = decodedToken.userId;
      req.userRole = decodedToken.userRole;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  const proctectRole = (role) =>(req,res,next)=>{
    if(req.userRole == role) next();
    else{
        console.log(req.userId);
        return res.status(303).json({error:'Unauthorized'});
    }
  }
module.exports = {
    authTokenCheck,
    proctectRole
};

