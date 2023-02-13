const express = require("express");
require("dotenv").config();
require("colors");
const app = express();
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')
const { errorHandler } = require('./middlewares/errorMiddleware')
const { logRequest } = require('./middlewares/logRequest')
const clientInfo = require('./routes/clientRoutes')
const blogs = require('./routes/blogRoutes')
const projects = require('./routes/portfolioRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//middlewares
app.use(errorHandler)

//log request
app.use(logRequest)

//routes
app.use('/contact', clientInfo)
app.use('/blogs', blogs)
app.use('/portfolio', projects)

// //connect to database
// connectDB()

//listen for requests
app.listen(PORT, ()=> console.log(`Server is running on Port ${PORT}`))