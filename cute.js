/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "cutepic",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "xnil",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "ig",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["___ভুল মানুষের সাথে কখনো কারো দেখা না হোক, কথা না হোক,পরিচয় না হোক⎯͢⎯⃝🩷🌻🪽\n\n༊_۵༎-𝐂-𝐄-𝐎 🩷⃝✨ [𝐌𝐀𝐇𝐅𝐔𝐉]🪽"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/PrxYZdtX/received-1003738970751593.jpg",
"https://i.postimg.cc/brq04bck/received-105348459301478.jpg",
"https://i.postimg.cc/85QmB9Zy/received-1323856151892332.jpg",
"https://i.postimg.cc/QC67PyqZ/received-1474530079966385.jpg",
"https://i.postimg.cc/SsdY2v3Y/received-1785474991887089.jpg",
"https://i.postimg.cc/9MdtxbSc/received-228374582945552.jpg",
"https://i.postimg.cc/L6bf3GXz/received-230605689933652.jpg",
"https://i.postimg.cc/mkrzQSWX/received-235415069373411.jpg",
"https://i.postimg.cc/7hX146wc/received-3255809644564723.jpg",
"https://i.postimg.cc/02WGHbtK/received-591125493173956.jpg",
"https://i.postimg.cc/jjz7K5hX/received-626449732883920.jpg",
"https://i.postimg.cc/8kbmMyMH/received-630746139119272.jpg",
"https://i.postimg.cc/SxH6kHby/received-6450469778353515.jpg",
"https://i.postimg.cc/ryg5KD2Z/received-674081238074982.jpg",
"https://i.postimg.cc/SskzKhTp/received-777423914174962.jpg",
"https://i.postimg.cc/288Fw4xf/received-850879789727280.jpg",
"https://i.postimg.cc/nzGBKzjz/received-938986143869495.jpg",
"https://i.postimg.cc/FHYbtNqW/received-947496953210413.jpg",
"https://i.postimg.cc/nh9mRTjN/received-963528251631621.jpg",
"https://i.postimg.cc/R0rHjfwh/received-997242784610140.jpg",


];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
