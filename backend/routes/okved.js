const express = require('express')
const router = express.Router()
const { authJwt } = require('../middlewares/auths')

const { getOkveds, createOkved, updateOkved, deleteOkved } = require('../controllers/okved')

// routes for okved
router.get('/', [authJwt.verifyToken], getOkveds)
router.post('/', [authJwt.verifyToken], createOkved)
router.put('/', [authJwt.verifyToken], updateOkved)
router.delete('/:id', [authJwt.verifyToken], deleteOkved)



module.exports = router