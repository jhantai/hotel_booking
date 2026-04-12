const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const TOKEN = "8622746861:AAHiKX4T_E6FLc15RtT6OO9UAZDCzTaelWw";
const CHAT_ID = "1071716647";

app.post("/register", async (req, res) => {
  const { name, email } = req.body;

  const message = `
🆕 Новый пользователь

👤 Имя: ${name}
📧 Email: ${email}
  `;

  try {
    await axios.post(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: message
      }
    );

    res.json({ success: true });

  } catch (error) {
    res.status(500).json({ error: "Telegram error" });
  }
});

app.listen(5000, () => console.log("Server started"));