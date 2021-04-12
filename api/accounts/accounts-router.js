const router = require('express').Router()
const mw = require('./accounts-middleware')
const Account = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Account.getAll()
    res.json(accounts)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', mw.checkAccountId, async (req, res) => {
  // DO YOUR MAGIC
  res.status(200).json(req.accounts)//Middle ware attaches returned object (an account), to request object's account value. No need for getById/
})

router.post('/', mw.checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const newAccount = await Account.create(req.body)
    res.status(201).json(newAccount)
  } catch (err) {
    next(err)
  }
}) 

router.put('/:id', mw.checkAccountPayload, mw.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const updateAccount = await Account.updateById(req.params.id, req.body)
    res.status(201).json(updateAccount)
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
