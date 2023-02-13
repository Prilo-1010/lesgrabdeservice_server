const Client = require('../models/clientModel')
const validator = require("email-validator");
 

// @desc POST info
// route /contact
const getInfo = async(req, res) =>{
    const {name, email, message} = req.body

    let emptyFields = []

    if(!name){
        emptyFields.push('name')
        return res.status(400).json({error: 'Please fill in your name', emptyFields})
    }
    if(!email){
        emptyFields.push('email')
        return res.status(400).json({error: 'Please fill in your email', emptyFields})
  }
    if(email){
        validator.validate(email); // true
        return res.status(400).json({error: 'Please enter a correct email', emptyFields})
    }
    if(!message){
        emptyFields.push('message')
        return res.status(400).json({error: 'Please fill in your message', emptyFields})
    }
    // if(emptyFields.length > 0){
    //     return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
    // }

    try {
        const client = await Client.create({name, email, message})
        res.status(200).json(client)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getInfo }