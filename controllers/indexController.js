const { validationResult } = require('express-validator');

module.exports = {
    index: (req, res, next) => {
        res.render('index', {
            title: "index"
        })
    },
    welcome: (req, res, next) => {
        /* req.query */
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            console.log(req.body);
            const { name, color, age, email, recordar } = req.body;
            req.session.user = {
                name: name,
                color: color,
                age: +age,
                email: email
            }
            console.log(req.session.user);
            if (recordar) {
                res.cookie('recordar', req.session.user, { maxAge: 1000 * 60 });
            }
            return res.redirect('/');
        } else {
            res.render('index', {
                old: req.body,
                errors: errors.mapped(),
                title: "Home"
            })
        }
    },
    logout: (req, res) => {
        res.render('logout', {
            title: "Logout"
        })
    },
    olvidar: (req, res) => {
        req.session.destroy();
        res.cookie('recordar', null, { maxAge: -1 });
        return res.redirect('/');
    }
}