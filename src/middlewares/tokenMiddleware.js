import db from "../database/db";

export default async function tokenMiddleware (req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if(!token) {
        res.sendStatus(401)
    }
    const session = await db.collection('sessions').findOne({ token });
    if (!session) {
      return res.sendStatus(401)
    }
    
    const user = await db.collection('users').findOne({ _id: session.userId });
    if (!user) {
      return res.sendStatus(401);
    }
    
    res.locals.user = user;
    next();
}