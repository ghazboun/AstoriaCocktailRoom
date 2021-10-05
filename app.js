const express = require("express");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

const day = new Date().getDay();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var openHours;
var dayText;
const year = new Date().getFullYear();

if(day===0){
  dayText="Open Today: " + days[0];
  openHours="4 PM - 12 AM";
} else if(day === 1){
  dayText="Closed Today: " + days[1];
  openHours="Funny Text";
} else if(day === 2){
  dayText="Open Today: " + days[2];
  openHours="4 PM - 1 AM";
}  else if(day === 3){
  dayText="Open Today: " + days[3];
  openHours="4 PM - 1 AM";
} else if(day === 4){
  dayText="Open Today: " + days[4];
  openHours="4 PM - 3 AM";
} else if(day === 5){
  dayText="Open Today: " + days[5];
  openHours="4 PM - 3 AM";
} else if(day === 6){
  dayText="Open Today: " + days[6];
  openHours="4 PM - 3 AM";
}

app.get("/",function(req,res){
  res.render("home", {
    dayText: dayText,
    openHours: openHours,
    year: year
  });
  });
  app.get("/menu",function(req,res){
    res.render("menu", {
      year: year
    });
  });


app.listen(3000, function() {
  console.log("Server has started listening on port 3000");
});
