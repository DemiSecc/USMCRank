/*INSERT GROUP ID AND COOKIE BELOW, xYu_mmy is cute*/

var groupId = 6316481 // << xyu_mmy is cutteee
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_00D361C6DD5D43A6B19B4A7FD71297557838B7D3319BE7E2AC68ACF8ADA0C371E72330D886D059B809513DDA499EBB63FB188D585752B71E6A88636C2345DBB4076FD9987FA45D40856D19F8CB8053045146966E092CEFAB062D08E6FB3DB8B3676125648196C778DAA2D391FACFFEC6FD52917BAD2867C25C06C39881342A4AC5AA94F7E6B4E85F0B2721176691185741A5DF710D8EB4B3BB5FE775C80DCDDE6D0E26BEBEDC9B083BE743F542D408C20B3B69EEE4C8BA639868DE7F20DA187E73E1B7D8708D0C7BC14A21F3AACDA3B5EB5CBB0FD7FE6AC8F12415CDCC8A9AABE5C0FF62591BF58A483DDA985123D4E0252468D66A6CD1387AF6925451044AE0A35E7ACB2634E1109D6F0F1DDF87A5E33885BE7AD70DEF1EA03722226BD28008859762B8" // << xYUMMYYMYMMYMY IS CUTE




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