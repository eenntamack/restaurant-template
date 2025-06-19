import mongoose from 'mongoose';

export const product = new mongoose.Schema({
    productName: {type: String, required:true},
    unitsSold: {type: Number, required: true},
    price: {type:mongoose.Schema.Types.Decimal128, required: true}
})