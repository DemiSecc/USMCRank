/*INSERT GROUP ID AND COOKIE BELOW, xYu_mmy is cute*/

var groupId = 6316481 // << xyu_mmy is cutteee
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_80A7C0756790FBDF2243FA2C3AC23267D643737328BB82653C47503A8B01FCE4CE506E3F89090DD602F9E83D3668F7C2E1CB4E14D6F4BEB3FDF3532E9BFB7B976AA449E507D929BC39DB38FE9B36A1419CFE00C89A9833BD9E0E1228356DADEC68B39ACA60D85E272C7709672EC943545F9BB854B4540353784AE27968C23E87A5D90A8825D7E8976D3FE10BEA38CA6DC61B1224C95EED223D51AA34C9D63A7AE2909B8A353106833E1F6BF0274FFD7A9F88B4E0CA6A10D2E15658754D09CCB4CC8F4FA70C54B39302804AA1D2A32F3A7A8E13CBB602312274C1057E115833ABE01A294E75C0E4AA4124FAA86B847CFB3E0FF8FCAEC941DFBBDE4ACF4E4BCE07846643429866AB821110F3E04A11E91412890FCF16C15E96C1596FEFD96A7004B938371A" // << xYUMMYYMYMMYMY IS CUTE




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