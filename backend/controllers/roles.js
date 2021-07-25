
const Roles = require('../models/Roles');

exports.createRole = (req, res) => {
    try {
        const { role, permissions } = req.body
        if (!role) return res.status(400).json("please enter role")
        const Role = new Roles()
        Role.role = role
        Role.permissions = permissions

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

// exports.createRole = (req, res) => {
//     try {
//         const { role } = req.body
//         console.log("Role is", req.body);
//         if (!role) return res.status(400).json("please enter role")
//         const Role = new Roles()
//         Role.role = role

//         Role.save()
//             .then((rolesdata) => {
//                 res.status(200).json({ rolesdata })
//             })
//             .catch((err) => {
//                 res.status(500).json({ error: "feild to save data" })
//             })
//     } catch (error) {
//         res.status(500).json({ "error": error })
//     }
// }

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
exports.editRole = async (req, res) => {
    console.log("req.params.id", req.params.roleId, 'req.body', req.body);
    const { role, permissions } = req.body

    try {
        const updatedRole = await Roles.findByIdAndUpdate({ _id: req.params.id }, { $set: { role, permissions } }, { new: true })
        updatedRole.save().then((data) => {
            return res.status(200).json({data })
        })
            .catch((err) => {
                return res.status(500).json({ error: "field to update role" })

            })

    }
    catch (error) {
        res.json({ message: error.message })
    }

    Roles.findById({ _id: req.params.roleId })
        .then(data => {
            console.log(data)
        })

}