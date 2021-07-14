const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { request, response, json } = require('express');

dotenv.config()


exports.signupController = async (req, res) => {

    const { username, email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                errorMessage: 'Email is already exist'
            })
        }
        const newUser = new User()
        newUser.username = username
        newUser.email = email

        const salt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(password, salt)

        await newUser.save()

        res.json({
            successMessage: "Register Successfully.. Now go to SignIn"
        })

    } catch (error) {
        console.log("Server Error while creating new user", error);
        res.status(500).json({
            errorMessage: "Server Error while creating new user"
        })
    }
}


exports.signinController = async (req, res) => {

    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                errorMessage: 'Invalid Email or Password'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({
                errorMessage: 'Invalid Email or Password'
            })
        }
        const payload = {
            user: {
                _id: user._id
            }
        }

        jwt.sign(payload, process.env.JWTSECRET, { expiresIn: process.env.JWTEXPIRE }, (err, token) => {

            if (err) console.log('Jwt error', err);
            const { _id, username, email, role } = user

            res.json({
                token,
                user: { _id, username, email, role }
            })
        })

    } catch (error) {
        console.log("Server Error while checking this user", error);
        res.status(500).json({
            errorMessage: "Server Error while checking this user"
        })
    }
}

exports.fetchUsers = async (req, res) => {
    try {

        const allUsers = await User.find({})
        res.json({
            allUsers
        })

    } catch (error) {
        console.log("Error when fetching User data ", error);
        res.status(500).json({
            errorMessage: "Please try later",
        });
    }
}

exports.editUser = async (req, res) => {
    console.log("req.params.id", req.params.id, 'req.body', req.body);
    const { username, email, password, role } = req.body
    try {
        User.findByIdAndDelete
        const updatedUser = await User.findByIdAndUpdate({ _id: req.params.id }, { $set: { username, email, password, role } }, { new: true }).select('-password')
        updatedUser.save().then((data) => {
            return res.status(200).json(data)
        })
            .catch((err) => {
                return res.status(500).json({ error: "field to update user" })

            })

    }
    catch (error) {
        res.json({ message: error.message })
    }

    User.findById({ _id: req.params.id })
        .then(data => {
            console.log(data)
        })

}

exports.deleteUser = async (req, res) => {
    console.log("req.params.id", req.params.id, 'req.body', req.body);
    const { username, email, password, role } = req.body
    try {
        const deletedUser = await User.findByIdAndDelete({ _id: req.params.id })
            return res.status(200).json({successMessage: "user's deleted",deletedUser})
        

    }
    catch (error) {
        res.json({ message: error.message })
    }
}

exports.addUser = async (req, res) => {

    const { username, email, password, role } = req.body
    console.log('body: ', req.body)
    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({
                errorMessage: 'Email is already exist'
            })
        }
        const newUser = new User()
        newUser.username = username
        newUser.email = email
        newUser.role = role

        const salt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(password, salt)

        await newUser.save()

        res.json({
            successMessage: "Register Successfully.."
        })

    } catch (error) {
        console.log("Server Error while creating new user", error);
        res.status(500).json({
            errorMessage: "Server Error while creating new user"
        })
    }
}


exports.readUser = async (req, res) => {

    const userId = req.user
    try {
        const user = await User.findById(userId)
        res.json({
            user
        })
    } catch (error) {
        console.log("Error when fetching User data ", error);
        res.status(500).json({
            errorMessage: "Please try later",
        });
    }
};
