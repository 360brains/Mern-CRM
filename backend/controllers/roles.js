
const Roles = require('../models/Roles');

exports.createRole = (req, res) => {
    try {
        const { role } = req.body
        console.log("Role is", req.body);
        if (!role) return res.status(400).json("please enter role")
        const Role = new Roles()
        Role.role = role

        Role.save()
            .then((rolesdata) => {
                res.status(200).json({ rolesdata })
            })
            .catch((err) => {
                res.status(500).json({ error: "feild to save data" })
            })
    } catch (error) {
        res.status(500).json({ "error": error })
    }
}

exports.getRoles = (req, res) => {
    try {
        Roles.find({})
            .then(roles => {
                res.json({ roles })
            })
            .catch(err => {
                res.json({ err })
            })
    } catch (error) {
        res.json(error)
    }
}