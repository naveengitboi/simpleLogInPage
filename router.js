var express = require('express')
var router = express.Router()

const credintial = {
    email : 'admin@gmail.com',
    password: 'admin123'
}

router.post('/login', (req, res)=> {
    if(req.body.email == credintial.email && req.body.password == credintial.password){
        req.session.user = req.body.email
        res.redirect('/route/dashboard')
    }
    else {
        res.end('Log in faild fraud')
    }

    
})

//log in dashboard
router.get('/dashboard', (req, res)=> {
    res.render('dashboard',{user: req.session.user})
})

//logout user
router.get('/logout', (req, res)=> {
    req.session.destroy(function(err){
        if(err){
            console.log(err)
        }
        else {

            res.render('base',{title: 'Log out successFull'})
        }
    })
})

module.exports = router;