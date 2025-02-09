const express = require('express')
const router = express.Router()
const { authJwt } = require('../middlewares/auths')

const { getOkvedSections, createOkvedSection, updateOkvedSection, deleteOkvedSection, getOkvedClasses, createOkvedClass, updateOkvedClass, deleteOkvedClass, getOkvedSubclasses, createOkvedSubclass, updateOkvedSubclass, deleteOkvedSubclass, getOkvedGroups, createOkvedGroup, updateOkvedGroup, deleteOkvedGroup, getOkvedSubgroups, createOkvedSubgroup, updateOkvedSubgroup, deleteOkvedSubgroup, getOkvedActivities, createOkvedActivity, updateOkvedActivity, deleteOkvedActivity } = require('../controllers/okved')

// routes for okved sections
router.get('/sections', [authJwt.verifyToken], getOkvedSections)
router.post('/sections', [authJwt.verifyToken], createOkvedSection)
router.put('/sections', [authJwt.verifyToken], updateOkvedSection)
router.delete('/sections/:id', [authJwt.verifyToken], deleteOkvedSection)

// routes for okved classes
router.get('/classes/:id', [authJwt.verifyToken], getOkvedClasses)
router.post('/classes', [authJwt.verifyToken], createOkvedClass)
router.put('/classes', [authJwt.verifyToken], updateOkvedClass)
router.delete('/classes/:id', [authJwt.verifyToken], deleteOkvedClass)

// routes for okved subclasses
router.get('/subclasses/:id', [authJwt.verifyToken], getOkvedSubclasses)
router.post('/subclasses', [authJwt.verifyToken], createOkvedSubclass)
router.put('/subclasses', [authJwt.verifyToken], updateOkvedSubclass)
router.delete('/subclasses/:id', [authJwt.verifyToken], deleteOkvedSubclass)

// routes for okved groups
router.get('/groups/:id', [authJwt.verifyToken], getOkvedGroups)
router.post('/groups', [authJwt.verifyToken], createOkvedGroup)
router.put('/groups', [authJwt.verifyToken], updateOkvedGroup)
router.delete('/groups/:id', [authJwt.verifyToken], deleteOkvedGroup)

// routes for okved subgroups
router.get('/subgroups/:id', [authJwt.verifyToken], getOkvedSubgroups)
router.post('/subgroups', [authJwt.verifyToken], createOkvedSubgroup)
router.put('/subgroups', [authJwt.verifyToken], updateOkvedSubgroup)
router.delete('/subgroups/:id', [authJwt.verifyToken], deleteOkvedSubgroup)

// routes for okved activities
router.get('/activities/:id', [authJwt.verifyToken], getOkvedActivities)
router.post('/activities', [authJwt.verifyToken], createOkvedActivity)
router.put('/activities', [authJwt.verifyToken], updateOkvedActivity)
router.delete('/activities/:id', [authJwt.verifyToken], deleteOkvedActivity)


module.exports = router