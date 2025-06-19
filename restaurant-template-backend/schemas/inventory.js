import mongoose from 'mongoose';

export const inventory = new mongoose.Schema({
    productName : {type: String, required:true},
    productID : {type: String, default: 'nonapplicable'},
    manufacturer:{type: String, required: true},
    stock: {type: mongoose.Schema.Types.Decimal128, required: true},
    price: {type: mongoose.Schema.Types.Decimal128, required: true}
})