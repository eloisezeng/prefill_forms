const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.get('/', (req, res) => res.render('whs_entrance', {
    fname: "",
    lname: "",
}))
router.post('/', (req, res) => {
    const { fname, lname } = req.body
    res.render('whs_entrance', {
        fname,
        lname,
    });
    if (fname && lname) {
        User.findOne({ name: fname + " " + lname, org: "whs" })
            .then(user => {
                if (!user) {
                    const newUser = new User({ name: fname + " " + lname, org: "whs" });
                    newUser.save()
                }
            })
    }
})

router.get('/wrt', (req, res) => res.render('wrt', {
    email: "",
    name: "",
}))
router.post('/wrt', (req, res) => {
    const { email, name } = req.body
    res.render('wrt', {
        email,
        name,
    });
    User.findOne({ name, org: "wrt" })
        .then(user => {
            if (!user) {
                const newUser = new User({ name, org: "wrt" });
                newUser.save()
            }
        })
})

router.get('/whs-test-kit', (req, res) => res.render('whs_test_kit', {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    consent: "",
    staff_or_student: "",
}))
router.post('/whs-test-kit', (req, res) => {
    const { fname, lname, email, phone, consent, staff_or_student} = req.body
    res.render('whs_test_kit', {
        fname,
        lname,
        email,
        phone,
        consent,
        staff_or_student,
    });
    User.findOne({ fname, org: "whs-test-kit" })
        .then(user => {
            if (!user) {
                const newUser = new User({ fname, org: "whs-test-kit" });
                newUser.save()
            }
        })
})

module.exports = router;