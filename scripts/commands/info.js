module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝘿𝘼𝙉𝙂𝙀𝙍-𝙎𝙀𝙔𝘼𝙈👀🥂 🍷 
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝙬𝙬𝙬.𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠.𝙘𝙮𝙗𝙚𝙧𝙯𝙤𝙣𝙚71𝙗𝙙
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬:𝙠𝙝𝙪𝙡𝙣𝙖 - 𝙨𝙖𝙩𝙠𝙝𝙞𝙧𝙖
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝙎𝘼𝙏𝙆𝙃𝙄𝙍𝘼
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝙋𝙐𝙍𝙀 𝙎𝙄𝙉𝙂𝙇𝙀👀💦
𝐖𝐨𝐫𝐤        : 𝘾𝙔𝘽𝙀𝙍 𝙕𝙊𝙉𝙀
𝐆𝐦𝐚𝐢𝐥       : 𝙎𝙀𝙔𝘼𝙈727228@𝙜𝙢𝙞𝙡.𝙘𝙤𝙢
𝙛𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙥𝙚𝙧𝙨𝙤𝙣 :𝙁𝘼𝙃𝙄𝙈👀💢

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/𝙘𝙮𝙗𝙚𝙧 𝙡𝙚𝙖𝙙𝙚𝙧`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/61553835175039/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
