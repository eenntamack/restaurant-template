import mongoose from 'mongoose'
import { StrictMode } from 'react'

const reportData = new mongoose.Schema({
    report: {type: String, required: true}
})
export const employee = new mongoose.Schema({
    name: {type:String, required},
    position: {type:String, emun:['managerial','employee']},
    role:{type:String, required:true},
    reports:[reportData],
    username:{type:String,required:true},
    password:{type:String, required:true},
    workdays:[{
        type:String, 
        enum:["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"],
        required:true
    }],
    worktime:{
        type:Date,
        required:true
    },
    team:{
        type:Number
    }
})

