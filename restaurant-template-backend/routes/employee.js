import { employee } from '../schemas/employees'
import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const router = express.Router()

const Employee = mongoose.models.employee || mongoose.model('employee', employee)
router.route("/").get(async (req,res)=>{
    
}).post(async (req,res)=>{

}).put(async (req,res)=>{

}).delete(async (req,res)=>{

})

export {router}