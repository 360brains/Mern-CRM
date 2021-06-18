const express = require('express')
const app = express()
const connectDB = require('./database/db')
const authRoutes = require('./routes/auth');
const productRoutes=require('./routes/Product')
const port = process.env.PORT || 4000


connectDB()

app.use(express.json())
app.use('/api/auth', authRoutes);
app.use('/api/Product', productRoutes);



app.listen(port, () => console.log(`listning on port ${port}`))

