import mongoose from "mongoose"
import express from 'express'
import { router as employee} from "./routes/employee";
import { router as guests } from "./routes/guests";
import { router as inventory } from "./routes/inventory";
import { router as products } from "./routes/products";


try {
  await mongoose.connect(process.env.ATLAS_URI);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error("MongoDB connection error:", err);
}

const app = express()


// app.use(cors({
//   origin: 'https://capstone-h59f.onrender.com', 
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// }));

app.use(express.json())
app.use('/employee', employee)
app.use('/guests', guests)
app.use('/inventory', inventory)
app.use('/products', products)


app.get("/",(req,res)=>{
    res.json({message:"backend is live"})
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})