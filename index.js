const express = require("express");
const app = express();

app.get("/api/:date", (req, res) => {
  
  let date = Number(req.params.date);
  
  let date1=req.params.date

if(!date1){
  return res.send({ unix: new Date().toUTCString(), utc: new Date().getTime() })
  }

  if (isNaN(date)) {
    date=date.toString();
    date1 = new Date(date1).toUTCString();
    console.log(date1 == "Invalid Date",typeof(date),date)
    if (date1 == "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      return res.send({ unix: new Date(date1).getTime(), utc: date1 });
    }
  } else {
    date1 = new Date(date).toUTCString();
    console.log(date);
    return res.send({ unix: date, utc: date1 });
  }
});

app.listen(2000, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log("Server is listening on port 2000");
  }
});
