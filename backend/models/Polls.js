

import mongoose from 'mongoose'

mongoose.connect("mongodb://mongo:27017/Pollsdb", {useNewUrlParser:true})
.then(()=> console.log("Db connected..")
).catch(err=>console.log(err));

const Schema = mongoose.Schema

const questionSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    questionText:{
        type:String,
        required:true
    },
    choices:[
        {
            type:Schema.Types.ObjectId,
            ref:"Choice",
            required:true
        }
    ]
}, {timestamps:true})

const Question = mongoose.model("Question",questionSchema )

const choicesSchema = new Schema({
    question:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"Question"
    },
    choiceText:{
        type:String,
        required:true
    }
}, {timestamps:true})
const Choice = mongoose.model("Choice", choicesSchema)

module.exports={
    Question,
    Choice
}