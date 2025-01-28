const express = require('express')
const router = express.Router()
const { authJwt } = require('../middlewares/auths')

const { getProfessions, createProfession, updateProfession, deleteProfession } = require('../controllers/professions')

// routes for professions
router.get('/', [authJwt.verifyToken], getProfessions)
router.post('/', [authJwt.verifyToken], createProfession)
router.put('/', [authJwt.verifyToken], updateProfession)
router.delete('/:id', [authJwt.verifyToken], deleteProfession)


module.exports = router