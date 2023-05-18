//import
const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");

// variable
const PORT = process.env.PORT || 8080;

//implementasi
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());

// endpoint user
const user = require("./routes/user");
app.use("/user", user);

// endpoint tipe_kamar
const tipe_kamar = require("./routes/tipe_kamar");
app.use("/tipe_kamar", tipe_kamar);

// endpoint kamar
const kamar = require("./routes/kamar");
app.use("/kamar", kamar);

// endpoint pemesanan
const pemesanan = require("./routes/pemesanan");
app.use("/pemesanan", pemesanan);

// endpoint detail_pemesanan
const detail_pemesanan = require("./routes/detail_pemesanan");
app.use("/detail_pemesanan", detail_pemesanan);

app.get("/ping", (req, res) => {
  res.status(200).json({
    message: "pong",
  });
});

//run server
app.listen(PORT, () => {
  console.log("server run on port http://localhost:" + PORT);
});
