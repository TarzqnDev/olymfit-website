const express = require('express');
const User = require('../models/User')
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {

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

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User Not Found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect Password'});
        }

        res.status(200).json({ message: 'Login Successful', user: {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error' });
    }
});

module.exports = router;