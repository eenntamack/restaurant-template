export const product = new mongoose.Schema({
    productName: {type: string, required:true},
    unitsSold: {type: Number, required: true},
    price: {type:mongoose.Schema.Types.Decimal128, required: true}
})