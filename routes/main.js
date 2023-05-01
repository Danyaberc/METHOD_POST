const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
   res.render('index')
})

const arrInfo = []

console.log(arrInfo)

router.post('/ajax', (req, res) => {
   arrInfo.push({ name: req.body.name, text: req.body.text })
   res.json(arrInfo)
})

module.exports = router