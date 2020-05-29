/*INSERT GROUP ID AND COOKIE BELOW, xYu_mmy is cute*/

var groupId = 6316481 // << xyu_mmy is cutteee
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_12FA7828FCA9247A0AEFFE0C49518BC81025483BCC4204D457E86B70534849B7420383DE7C6AF927700280031C8E7B036C267005E841D622EA9DBDF553C0069B860244D15412E213A33F7694F552FC92DBF8EAF16F84F82395EB187BEB99164DD7EB5BA0536660433490D90CA51B5944D23079A3D8921CE876D4CFFF52FFFF223F033B2CFFE1BCEFD5A5DA1E5D2CB0C781C1800179A4D0DBEB98463F20EE3B3ECF5386575649566344F719970E724A514225E36E1702E90FA27FEED966FDC44EBAEE360F0BB3EAC9F91A884BE153D4C4AB17EAEB6A904561A13E0F0E1BCD83B9BF27771B783A04CC485BD0AE193C4769A23B5688F97366842445827CBBAD861F0E61EB900EA362A030293A0D0DCE90667349DEB4928017F959045EC73F36F42506EE23B7" // << xYUMMYYMYMMYMY IS CUTE




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