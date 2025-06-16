
export const inventory = new mongoose.Schema({
    productName : {type: string, required:true},
    productID : {type: string, default: 'nonapplicable'},
    manufacturer:{type: string, required: true},
    stock: {type: mongoose.Schema.Types.Decimal128, required: true},
    price: {type: mongoose.Schema.Types.Decimal128, required: true}
})