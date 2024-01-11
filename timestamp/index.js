const express = require("express");
const app = express();
const cors=require("cors")
app.use({origin:"*"})
app.get("/api/:date?", (req, res) => {
  console.log("string", req.params.date);
  let date = req.params.date;

  if (!date) {
    return res.send({ unix: new Date().getTime(), utc: new Date().toUTCString() });
  }

  if (isNaN(date)) {
    date = new Date(date).toUTCString();

    if (date == "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      return res.send({ unix: new Date(date).getTime(), utc: date });
    }
  } else {
    date = new Date(Number(date)).toUTCString();
    return res.send({ unix: Number(date), utc: date });
  }
});



const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
