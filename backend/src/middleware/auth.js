import jwt from 'jsonwebtoken';
export const autheticateUser=(req,res,next)=>{
    try{

        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
          return res.status(401).json({ error: 'Authentication required' });
        }
        const decoded = jwt.verify(token, 'JWTSECRET');
        req.userId = decoded.userId;
        next();

    }catch(error){
        res.status(401).json({ error: 'Invalid token' });

    }
}
export const generateTestToken = (userId) => {
    return jwt.sign({ userId }, 'JWTSECRET', { expiresIn: '1d' });
  };

  //  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsImlhdCI6MTczNTU0MTc0NiwiZXhwIjoxNzM1NjI4MTQ2fQ.XzmACLOWyopLxbMVlsDugr4kOFtcqwmSDUNrdAmqZ1I