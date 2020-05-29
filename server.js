/*INSERT GROUP ID AND COOKIE BELOW, xYu_mmy is cute*/

var groupId = 6316481 // << xyu_mmy is cutteee
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_721E7D8575931BEB33FE9F61D52CE4546E028C9DE8230158F7D98D6A0EB5613F3B4DD0A67D09E89DCD7CD3B7FE92F91097EC55ACBC2176F74FC1CC5D04536C796B107163155165C76414B60576855595A1EC87CBAE99643A8542E20A3D25F7F0F666C12A24C049E9388AC197E86781E2008EBB1626922D07E5A097374BB6A15B14A9AF28DDEAA4152959014CB6380878065547BB35BBB37C1FC9E395E995C52B61CEB0E9242080AE2B6AC03CE4DB1A713436A78895A8804E17BCE6FDDF43E705697266485A76261E6239AA211B61BCED242809D40A04F1377416217BF588069126480F171EAA3EE6195B988F53F91BF61AEC6EAF6770FBBAEACFD014AD3ECD5A6824256292A4979610F3A5E98A6F70B38C4EBD2A6FA96F1CE045653EDF2DC15EE4A721DC65043990C0FA753CE93169806D8B5793" // << xYUMMYYMYMMYMY IS CUTE




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