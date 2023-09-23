const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')

// dotenv config
dotenv.config();

// rest object
const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

// app.get('/', (req, res) => { // (request, response, middleware)
//   res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//     res.status(200).json({
//         message: 'Welcome to Blood Bank App.'
//     })
// })

app.use('/api/v1/test', require('./routes/testRoutes'))

// for application run
app.listen(PORT, () => {
    console.log(`Blood Bank App ${process.env.DEV_MODE} server mode running on port ${PORT}`
        .bgBlue.white)
})