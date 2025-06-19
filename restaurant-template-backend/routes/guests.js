import { guests } from '../schemas/guests.js'
import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const router = express.Router()
const guest = mongoose.models.guests || mongoose.model('guests', guests)
router.route("/").get(async (req,res)=>{
    const guestList = await guest.find()
    res.json({guestList:guestList})
}).post(async (req,res)=>{
    
}).put(async (req,res)=>{

}).delete(async (req,res)=>{

})

export {router}