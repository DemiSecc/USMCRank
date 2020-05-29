/*INSERT GROUP ID AND COOKIE BELOW, xYu_mmy is cute*/

var groupId = 6316481 // << xyu_mmy is cutteee
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_4D47655AC854530673A086743C4C62004044CAE5FDC6C123584B7A5573BA925A736D8F89DF66D17589A1AE23F2C8F22B2C30BA9BB2D1B024EAC57A753759B57A2E5B43B2CCBE9EA05EFA7D31924516E331F2FD20A5892D8361BF3BF2201355FF67F3B7DED9082290E143D15FDC35DB84D41D6003D1FF4D09617D7CCE73AB758C257FD52D021318CBF39DB921CF75276081D3A268C0E7E62FBF70A17ABE05D6003FA6005ED8C3EA1AA8245BEF6E708504AFAD744AFA43F1D85AC2F37FB05C8B4ABCFA70AF85A9F6179FC5F38A7E1AF97136A58A0B83B3D314B5FFDE6B990D34A4D02734AA7ECC3711ED7433279A3386A50E7F083E10F5F4F8293DCB61845FE36663F8CCACF4111D71C8FEA58CF8B0ADE5506676547F1A436F81B81DA61312545254F0B434" // << xYUMMYYMYMMYMY IS CUTE




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