
export const guests = new mongoose.Schema({
    name:{type:String, required:true},
    status:{type:String,emun:['important','caution','banned']},
})