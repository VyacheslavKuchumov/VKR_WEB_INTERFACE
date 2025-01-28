const { Profession } = require('../models/professions')


// get all professions
const getProfessions = async (req, res) => {
    try {
        const professions = await Profession.findAll()
        res.status(200).json(professions)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


// create profession
const createProfession = async (req, res) => {
    try {
        const { profession_name } = req.body
        const profession = await Profession.create({ profession_name })
        res.status(201).json(profession)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// update profession
const updateProfession = async (req, res) => {
    try {
        const { profession_id, profession_name } = req.body
        const profession = await Profession.findByPk(profession_id)
        if (!profession) return res.status(404).send({ message: 'Profession not found' })
        await profession.update({ profession_name })
        return res.status(200).send({ message: 'updated' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// delete profession
const deleteProfession = async (req, res) => {
    try {
        const profession_id = req.params?.id
        const profession = await Profession.findByPk(profession_id)
        if (!profession) return res.status(404).send({ message: 'Profession not found' })
        await profession.destroy()
        return res.status(200).send({ message: 'deleted' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

module.exports = {
    getProfessions,
    createProfession,
    updateProfession,
    deleteProfession
}
