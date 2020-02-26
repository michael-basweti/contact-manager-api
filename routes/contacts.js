const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');

const User = require('../models/User')
const Contact = require('../models/Contact')

router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({user:req.user.id}).sort({date: -1})
        res.json(contacts)
    } catch (err) {
        console.error(erro.message);
        res.status(500).send('server error')
    }
});

router.post('/', (req, res) => {
    res.send('Add contacts')
});

router.put('/:id', (req, res) => {
    res.send('update contacts')
});

router.delete('/:id', (req, res) => {
    res.send('Delete contact')
});

module.exports = router;