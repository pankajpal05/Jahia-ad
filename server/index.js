const express = require("express");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const Joi = require("joi");
const fs = require("fs");
const path = require("path");
const keyFilePath = path.join(__dirname, "drive-clone-990d6-11be421349a4.json");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
const auth = new google.auth.GoogleAuth({
  keyFile: keyFilePath,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const spreadsheetId = "1yuAuoMZo5u9q7mZ_2ZdqJcUuv1DbUoLn3dJ3mrLpoYs";

// Define the validation schema using Joi
const schema = Joi.object({
  name: Joi.string().required(),
  contact: Joi.string().required(),
  email: Joi.string().email().required(),
  category: Joi.string().required(),
  message: Joi.string().required(),
});

app.post("/form", async (req, res) => {
  try {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res
        .status(400)
        .send(`Validation Error: ${error.details[0].message}`);
    }

    const { name, contact, email, category, message } = value;

    const data = [name, contact, email, category, message];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A2", // Start appending from row 2
      valueInputOption: "RAW",
      resource: {
        values: [data],
      },
    });

    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error appending data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
