import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
    console.log(req.headers)
    const authHeader = req.headers['authorisation'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token)

    if (!token) {
        return res.json({ success: false, message: "Unauthorized token" });
    }
    try{
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decodedToken)
        req.body.userId = decodedToken.id
        next();
    }
    catch(error){
        console.log(error)
        res.json({ success: false, message: "Error" });
    }
};

export default authenticateToken;
