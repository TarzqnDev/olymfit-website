const express = require('express');
const User = require('../models/User')
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email Already Registered' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User ({
            firstName, lastName, email, password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: 'Registered Succesfully' });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error' });
    }
});

module.exports = router;