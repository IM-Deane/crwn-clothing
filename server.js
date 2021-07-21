const express = require("express");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
	// gzip files on build
	// app.use(compression());
	// Allows us to serve static files during production
	app.use(express.static(path.join(__dirname, "client/build")));

	// For any route, serve index.html file
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client/build", "index.html"));
	});
}

app.listen(PORT, (error) => {
	if (error) throw error;
	console.log(`Server running on port ${PORT}`);
});

app.get("/service-worker.js", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

// Route
app.post("/payment", (req, res) => {
	const body = {
		source: req.body.token.id,
		amount: req.body.amount,
		currency: "cad",
	};

	stripe.charges.create(body, (stripeErr, stripeRes) => {
		if (stripeErr) {
			res.status(500).send({ error: stripeErr });
		} else {
			res.status(200).send({ success: stripeRes });
		}
	});
});

// Handle contact form submissions
app.post("/contact", (req, res) => {
	const { email, name, password } = req.body;
	try {
		res.status(200).send({ formData: email, name, password });
	} catch (error) {
		res.status(500).send({ error: error });
	}
});
