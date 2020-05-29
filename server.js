/*INSERT GROUP ID AND COOKIE BELOW, xYu_mmy is cute*/

var groupId = 6316481 // << xyu_mmy is cutteee
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_7E6E091269E5242212FCC27A7C7CC0EDD0C00FE9EBB0F44C64D753C04DE89994958F2D3CE5BC38A609AECAB33149EB57450BFDABCC5DE1B4833F42A2B4633C954A2EFB2C3EB5ECA7686D7035B4A8170C4DE93AFD18E9D0C8E9428BC6C199B8878129D013D18C04DE35F52F77E7F24FC63C88CCA734050F5583FE877DAC6977F6D7E56C7A66F165B37505E9B383241433DE3DE1644B2A30353AA3347192C4A4DF806113D9C409CAF515F12733A60D26A9869B85373689D5E5BBE0A127EF53EF982AB984A9F49A696A1EB0F8A8725F62451AF1BB54D58B7417BA82029F498768E88C78EC71E387559104503A7B14CFF025C47F9AD8EC85131BFC3080FEDF43D6069714BB562C8751BF8DD75FB2018D4D80EB6734B7BDF967CB0D2A4995A3F9FAAC0C65C455" // << xYUMMYYMYMMYMY IS CUTE




const express = require("express");
const rbx = require("noblox.js");
const app = express();

app.use(express.static("public"));

async function startApp() {
  await rbx.cookieLogin(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});



// >>If you change anything xYu_mmy will eat you!!!!<<