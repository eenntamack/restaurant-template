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
})

