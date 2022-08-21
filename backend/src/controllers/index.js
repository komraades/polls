import { userModel } from '../models/polls.js'
// This is a test controller 
export const indexController = async (req,res) => {
    const testUser = new userModel({name: "Chudah"})
    await testUser.save().then(
        console.log("Saved successfully")
    ).then(() =>
    res.send(`Connected successfully \n${JSON.stringify(testUser)}`)
    ).catch(err => res.json({err}))
}

//TODO: Define more controllers
//TODO: Resolve error with code 79