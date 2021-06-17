const express = require('express')
const app = express()
const connectDB = require('./database/db')
const authRoutes = require('./routes/auth');
const port = process.env.PORT || 4000


connectDB()

app.use(express.json())
app.use('/api/auth', authRoutes);



app.listen(port, () => console.log(`listning on port ${port}`))

