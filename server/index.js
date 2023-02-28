const express = require("express")
const bodyParser = require("body-parser")
const _ = require("lodash")
const mongoose = require("mongoose")
const ejs = require("ejs")

const app = express()

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

const CONNECTION_URL =
	"mongodb+srv://admin-justfidel:Password123@cluster0.30p6n62.mongodb.net/talithaDB"

const PORT = process.env.PORT || 3001

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () =>
			console.log(`Server running on port: ${PORT}`),
		),
	)
	.catch(error => console.log(error.message))

mongoose.set("strictQuery", false)

// const itemsSchema = {
// 	name: {
// 		type: String,
// 		require: [true, "Field cannot be blank"],
// 	},
// }

// const Item = mongoose.model("Item", itemsSchema)

// app.get("/api", (req, res) => {
// 	res.json("<h1>Hello Talitha 🥰</h1>")
// })
