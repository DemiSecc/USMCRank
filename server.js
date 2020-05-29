/*INSERT GROUP ID AND COOKIE BELOW, xYu_mmy is cute*/

var groupId = 6316481 // << xyu_mmy is cutteee
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_DF0D22615670B96F8D68179FA5AB94C535282765B24F3A6F1A69933537A34DA28FD30951B254FD7CB738A3C39453B545F28F79555E64114F8F2C87DFDDAC522585B008834AE327D3C13BC7F2A02512AE6C79F3E21C1EA1BC1657942344375A4AA379BCCDD27BD82A1FABA05D8750F7EE165AF3CAE82369AD2550856177F82DB6460ABF0DE0E5F9FAF0B90AC05023E1E284D94A2FD65FC7ED81DDDD2F2D843C20C456555B2F9B36C5AC9A6787FA3FD9C24F03B1EEB694F3BB4263985AD360084511922AFFA72343DB0C1F92AD23CD4CC43462148DE27B65776EF694249A260B42AFB9824290BD79E594B68FB371DCB64378512BA2FA8D74F10788B58DEDE31E92BB6B1BB6A1BA049D374088FE617C1BD821C3DB33B4716C4BAD30F8286345DE4AF35BDBC9" // << xYUMMYYMYMMYMY IS CUTE




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