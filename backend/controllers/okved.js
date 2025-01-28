const { OkvedSection, OkvedClass, OkvedSubclass, OkvedGroup, OkvedSubgroup, OkvedActivity } = require("../models/okved");


// crud for okved section
// get okved sections
const getOkvedSections = async (req, res) => {
    try {
        const okvedSections = await OkvedSection.findAll({order: [['code', 'ASC']]})
        res.status(200).json(okvedSections)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// create okved section
const createOkvedSection = async (req, res) => {
    try {
        const { code, name } = req.body
        const okvedSection = await OkvedSection.create({ code, name })
        res.status(201).json(okvedSection)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// update okved section
const updateOkvedSection = async (req, res) => {
    try {
        const { section_id, code, name } = req.body
        const okvedSection = await OkvedSection.findByPk(section_id)
        if (!okvedSection) return res.status(404).send({ message: 'Okved section not found' })
        await okvedSection.update({ code, name })
        return res.status(200).send({ message: 'updated' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// delete okved section
const deleteOkvedSection = async (req, res) => {
    try {
        const section_id = req.params?.id
        const okvedSection = await OkvedSection.findByPk(section_id)
        if (!okvedSection) return res.status(404).send({ message: 'Okved section not found' })
        await okvedSection.destroy()
        return res.status(200).send({ message: 'deleted' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}


// crud for okved class
// get okved classes
const getOkvedClasses = async (req, res) => {
    try {
        const okvedClasses = await OkvedClass.findAll({where: {section_id: req.params?.id}, order: [['code', 'ASC']]})
        res.status(200).json(okvedClasses)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// create okved class
const createOkvedClass = async (req, res) => {
    try {
        const { code, name, section_id } = req.body
        const okvedClass = await OkvedClass.create({ code, name, section_id })
        res.status(201).json(okvedClass)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// update okved class
const updateOkvedClass = async (req, res) => {
    try {
        const { id, code, name, section_id } = req.body
        const okvedClass = await OkvedClass.findByPk(id)
        if (!okvedClass) return res
            .status(404)
            .send({ message: 'Okved class not found' })
        await okvedClass.update({ code, name, section_id })
        return res.status(200).send({ message: 'updated' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// delete okved class
const deleteOkvedClass = async (req, res) => {
    try {
        const class_id = req.params?.id
        const okvedClass = await OkvedClass.findByPk(class_id)
        if (!okvedClass) return res
            .status(404)
            .send({ message: 'Okved class not found' })
        await okvedClass.destroy()
        return res.status(200).send({ message: 'deleted' })
    }
    catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// crud for okved subclass
// get okved subclasses
const getOkvedSubclasses = async (req, res) => {
    try {
        const class_id = req.params?.id
        const okvedSubclasses = await OkvedSubclass.findAll({where: {class_id: class_id}, order: [['code', 'ASC']]})
        res.status(200).json(okvedSubclasses)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// create okved subclass
const createOkvedSubclass = async (req, res) => {
    try {
        const { code, name, class_id } = req.body
        const okvedSubclass = await OkvedSubclass.create({ code, name, class_id })
        res.status(201).json(okvedSubclass)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// update okved subclass
const updateOkvedSubclass = async (req, res) => {
    try {
        const { id, code, name, class_id } = req.body
        const okvedSubclass = await OkvedSubclass.findByPk(id)
        if (!okvedSubclass) return res
            .status(404)
            .send({ message: 'Okved subclass not found' })
        await okvedSubclass.update({ code, name, class_id })
        return res.status(200).send({ message: 'updated' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// delete okved subclass
const deleteOkvedSubclass = async (req, res) => {
    try {
        const subclass_id = req.params?.id
        const okvedSubclass = await OkvedSubclass.findByPk(subclass_id)
        if (!okvedSubclass) return res
            .status(404)
            .send({ message: 'Okved subclass not found' })
        await okvedSubclass.destroy()
        return res.status(200).send({ message: 'deleted' })
    }
    catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// crud for okved group
// get okved groups
const getOkvedGroups = async (req, res) => {
    try {
        const okvedGroups = await OkvedGroup.findAll({where: {subclass_id: req.params?.id}, order: [['code', 'ASC']]})
        res.status(200).json(okvedGroups)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// create okved group
const createOkvedGroup = async (req, res) => {
    try {
        const { code, name, subclass_id } = req.body
        const okvedGroup = await OkvedGroup.create({ code, name, subclass_id })
        res.status(201).json(okvedGroup)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// update okved group
const updateOkvedGroup = async (req, res) => {
    try {
        const { id, code, name, subclass_id } = req.body
        const okvedGroup = await OkvedGroup.findByPk(id)
        if (!okvedGroup) return res
            .status(404)
            .send({ message: 'Okved group not found' })
        await okvedGroup.update({ code, name, subclass_id })
        return res.status(200).send({ message: 'updated' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// delete okved group
const deleteOkvedGroup = async (req, res) => {
    try {
        const group_id = req.params?.id
        const okvedGroup = await OkvedGroup.findByPk(group_id)
        if (!okvedGroup) return res
            .status(404)
            .send({ message: 'Okved group not found' })
        await okvedGroup.destroy()
        return res.status(200).send({ message: 'deleted' })
    }
    catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// crud for okved subgroup
// get okved subgroups
const getOkvedSubgroups = async (req, res) => {
    try {
        const okvedSubgroups = await OkvedSubgroup.findAll({where: {group_id: req.params?.id}, order: [['code', 'ASC']]})
        res.status(200).json(okvedSubgroups)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// create okved subgroup
const createOkvedSubgroup = async (req, res) => {
    try {
        const { code, name, group_id } = req.body
        const okvedSubgroup = await OkvedSubgroup.create({ code, name, group_id })
        res.status(201).json(okvedSubgroup)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// update okved subgroup
const updateOkvedSubgroup = async (req, res) => {
    try {
        const { id, code, name, group_id } = req.body
        const okvedSubgroup = await OkvedSubgroup.findByPk(id)
        if (!okvedSubgroup) return res
            .status(404)
            .send({ message: 'Okved subgroup not found' })
        await okvedSubgroup.update({ code, name, group_id })
        return res.status(200).send({ message: 'updated' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// delete okved subgroup
const deleteOkvedSubgroup = async (req, res) => {
    try {
        const subgroup_id = req.params?.id
        const okvedSubgroup = await OkvedSubgroup.findByPk(subgroup_id)
        if (!okvedSubgroup) return res
            .status(404)
            .send({ message: 'Okved subgroup not found' })
        await okvedSubgroup.destroy()
        return res.status(200).send({ message: 'deleted' })
    }
    catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// crud for okved activity
// get okved activities
const getOkvedActivities = async (req, res) => {
    try {
        const okvedActivities = await OkvedActivity.findAll({where: {subgroup_id: req.params?.id}, order: [['code', 'ASC']]})
        res.status(200).json(okvedActivities)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// create okved activity
const createOkvedActivity = async (req, res) => {
    try {
        const { code, name, subgroup_id } = req.body
        const okvedActivity = await OkvedActivity.create({ code, name, subgroup_id })
        res.status(201).json(okvedActivity)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// update okved activity
const updateOkvedActivity = async (req, res) => {
    try {
        const { id, code, name, subgroup_id } = req.body
        const okvedActivity = await OkvedActivity.findByPk(id)
        if (!okvedActivity) return res
            .status(404)
            .send({ message: 'Okved activity not found' })
        await okvedActivity.update({ code, name, subgroup_id })
        return res.status(200).send({ message: 'updated' })
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

// delete okved activity
const deleteOkvedActivity = async (req, res) => {
    try {
        const activity_id = req.params?.id
        const okvedActivity = await OkvedActivity.findByPk(activity_id)
        if (!okvedActivity) return res
            .status(404)
            .send({ message: 'Okved activity not found' })
        await okvedActivity.destroy()
        return res.status(200).send({ message: 'deleted' })
    }
    catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

module.exports = { getOkvedSections, createOkvedSection, updateOkvedSection, deleteOkvedSection, getOkvedClasses, createOkvedClass, updateOkvedClass, deleteOkvedClass, getOkvedSubclasses, createOkvedSubclass, updateOkvedSubclass, deleteOkvedSubclass, getOkvedGroups, createOkvedGroup, updateOkvedGroup, deleteOkvedGroup, getOkvedSubgroups, createOkvedSubgroup, updateOkvedSubgroup, deleteOkvedSubgroup, getOkvedActivities, createOkvedActivity, updateOkvedActivity, deleteOkvedActivity }

