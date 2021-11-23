import express from 'express';

import { signup, login, isAuth } from '../controllers/auth.js';

const router = express.Router();

//Logic implemented in 'auth.js'
router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});
//module.exports = router;
export default router;