import mongoose from 'mongoose';

export const guests = new mongoose.Schema({
    name:{type:String, required:true},
    status:{type:String,emun:['important','caution','banned','standard']},
    location:{
        type:String,
        enum:["Remote","In-person"]
    },
    reservationDay:{
        type:String,
        enum:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    },
    reservationTime:{type:Date},
    dish:[{
        type:String,
        reuired:true
    }]
})