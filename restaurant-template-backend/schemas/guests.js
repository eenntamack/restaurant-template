
export const guests = new mongoose.Schema({
    name:{type:String, required:true},
    status:{type:String,emun:['important','caution','banned','standard']},
    reservationDay:{
        type:String,
        enum:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    },
    reservationTime:{type:Date}
})