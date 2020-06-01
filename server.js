/*INSERT GROUP ID AND COOKIE BELOW, xYu_mmy is cute*/

var groupId = 6316481 // << xyu_mmy is cutteee
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_6413B7FA7C9F2BA25C0400B1E970C99A354390AAAEBEE06F71B2AD88C9AF91E9A112E252FD3A370DB78AFF9CEBBA27D1941BFFD0CE143065BE66A60DECEDEA96193C5D7B0552B9E86DF1E65FA87F94B4E081BDA62D8B0F05987080323A998E417983C62C3E20947A870118868F38975DCC2D8BF613F48D5E6219A601467AB94FD2750B390985FDE9EF72E56BA43A62BDA52B3D6F6A5E593F8D3F2ABB2C553585F2CE5E6D8FF09ACB1BD3E042AF90D31A628512F1905170F0F2C351684A099B85E76FA5C72DB122BE2C9EC21FC1CC8E0CFE3A8EBD6C7A0D864E89D6C56BF216837630201094C574FA8B1CC0B21D1FB6D02F3C9D2613C0FF847C57B53FD4BA43E45C715D10169B14B7AABFFD2BB448F650822DFB8738DA5A93BC93C46ACEA76C7D7455CC62" // << xYUMMYYMYMMYMY IS CUTE




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