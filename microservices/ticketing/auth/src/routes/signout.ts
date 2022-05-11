import express from "express";

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('First user')
});

export { router as signoutRouter };