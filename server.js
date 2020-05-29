/*INSERT GROUP ID AND COOKIE BELOW, xYu_mmy is cute*/

var groupId = 6316481 // << xyu_mmy is cutteee
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_A70190033D6C8A1AF1B7B89E17CF3024B4CC4F8D506F6834FA191B6BB44DACE4725D70AE68EC8E359CFC78B297FDBE4ECE7A8F9FACC5736F847B3AB762C7C8BA205E00168996C54D23099E96D3CB84F3F91C70EF7CA9145A1E306E9FEAF0E5B5D8728B8C01C73DB456F2E8980943183ABC8FEFD50B418153E458BF5EFBB733D76156B64E89C7D786E4A88B0912FD974F06DBF130E0A1181595D14976C9CB6E2573717CDD828FFAB3CA277F46DDEF98BB2FBFF4DE333B1E7EDD2C289CE0CD1E9E872245417E8D5D6CC5A695FB1C2B856623F245B1FE87E926836CAA056D524B65BEF97FC9CCCDD28AAA714D81EDBA277FF870E49D2A5DCAEA347A165104013C4DC18928051821B5EFDA657574EF53A1489FBC852195D2BE3C21B9FAC48F38535609B536CDF1AC102EE515CA5245554DF4F109961A" // << xYUMMYYMYMMYMY IS CUTE

/*INSERT GROUP ID AND COOKIE ABOVE*/


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