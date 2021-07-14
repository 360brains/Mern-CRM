const express = require('express')
const app = express()
const connectDB = require('./database/db')
const authRoutes = require('./routes/auth');
const  roleRoutes   = require('./routes/role')
const productRoutes=require('./routes/Product')
const port = process.env.PORT || 6000
const cors = require('cors')

connectDB()


app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes);
app.use('/api/product' , productRoutes)
app.use('/api/role' , roleRoutes)



app.use('/uploads' , express.static('uploads') )


app.listen(port, () => console.log(`listning on port ${port}`))

