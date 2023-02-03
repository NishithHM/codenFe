const express = require('express');
const dotenv = require('dotenv')
const router = express.Router();
const app = express()
dotenv.config({ path: './.env' })
const port = process.env.PORT;
app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(__dirname, html))

app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
