const express = require("express");
const app = express();

app.get("/api/:date", (req, res) => {
  console.log("string",req.params.date)
  let date = Number(req.params.date);
  
  let date1=req.params.date

if(!date1){
  return res.send({ unix: new Date().toUTCString(), utc: new Date().getTime() })
  }

  if (isNaN(date)) {
    date=date.toString();
    date1 = new Date(date1).toUTCString();
   
    if (date1 == "Invalid Date") {
      res.json({ error: "Invalid Date" });
    } else {
      return res.send({ unix: new Date(date1).getTime(), utc: date1 });
    }
  } else {
    date1 = new Date(date).toUTCString();
  
    return res.send({ unix: date, utc: date1 });
  }
});

app.listen(2000);
