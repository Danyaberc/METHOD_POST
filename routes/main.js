const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
   res.render('index')
})

const articles =
   [
      { title: '' },
      { text: '' },
   ]

router.get('/articles', (req, res) => {
   res.json(articles)
})

router.post('/articles', (req, res) => {
   res.json(articles)
})



module.exports = router