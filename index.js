const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
const dateFormat = require("dateFormat")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});







client.login('NDU4MzgyNjM4NzM1MTYzNDIy.Dgm1qg.54V2Ts0uc0RM3QzjeWoIA7YiFvw');

client.on('message', message => {
    if (message.author.bot) return;
if (message.content.startsWith(`say`)) {
    message.channel.startTyping(); 
     message.delete();
 let args = message.content.split(" ").slice(1);
         message.delete()
         message.channel.stopTyping(true); 
   message.channel.sendMessage(args.join(" ")).catch(console.error);
    
 }

}); 

const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });

  const moment = require("moment");
client.on('message', async message => {
    if (!message.channel.guild) return undefined;
    let time = moment().format('Do MMMM YYYY , hh:mm');
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "bc")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_SERVER")) return message.reply("**# You don't have the needed permissions!**");
        if(!args) return message.reply("**# Supply a message!**");
        message.channel.send(`\`\`- Name:\`\`\n${message.author}\n\n\`\`- Date:\`\`\n${time}\n\n\`\`- Message:\`\`\n${args}\n\n__# | You have 15s to say Yes or No__`)
.then(() => {
  message.channel.awaitMessages(response => response.content === 'yes', {
    max: 1,
    time: 15000,
    errors: ['time'],
  })
  .then((collected) => {
                let bcEmbed = new Discord.RichEmbed()
          .setAuthor(`${message.author.username}#${message.author.discriminator}`,message.author.avatarURL)
          .setThumbnail(message.guild.iconURL || message.guild.avatarURL)
          .addField('- Sender:',message.author)
          .addField('- Server:',message.guild.name)
          .addField('- Message:',`\`\`\`${args}\`\`\``);
          message.guild.members.forEach(m => m.sendMessage(bcEmbed));
          message.channel.send(`**Done!, Sent the message to: \`${message.guild.members.size}\` members!**`);
      
  });
});
    } else {
          message.channel.awaitMessages(response => response.content === 'no', {
    max: 1,
    time: 15000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.send("__- Canceled!__")
    });
    }
});
  
  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "e")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });

client.on('message', message => {
      if(message.content.startsWith ("!marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
       if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
        if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
              message.channel.send(`**${proposed} 
 بدك تقبلي عرض الزواج من ${message.author}
 العرض لمدة 15 ثانية 
 اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
   .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
   
   const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`**${message.author} تم رفض عرضك**`);
})
        
  
             
    
  }
});

const bannedwords = [
  "كسمك",
  "زبي",
  "انيك امك",
  "Fuck You",
  "ass",
  "قحبة"

];

client.on('message',  message => {
if(bannedwords.some(word => message.content.includes(word))) {
  message.delete()
  message.reply(" احترم نفسك , يمنع الشتم في خادمنا او سوف تتعرض الي  ميوت ").then(msg => {msg.delete(5000)});;
};
});

client.on('message',function(message) {
  if(message.content.startsWith (prefix +'server')) {
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const noww = new Date();
    dateFormat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAt = millis / 1000 / 60 / 60 / 24;
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField(`${message.guild.name}`,`\`\`منذ ${createdAt.toFixed(0)} يوما \`\``)
    .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${message.guild.region}__ **]`,true)
    .addField(':medal:** __الرتب__**',`[** __${message.guild.roles.size}__ **]`,true)
    .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${message.guild.memberCount}__ **]`,true)
    .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${message.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField(':pencil:**__ الرومات الكتابية__**',`[** __${message.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField(':microphone:**__ رومات الصوت__**',`[** __${message.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField(':crown:**__ الأونـر__**',`**${message.guild.owner}**`,true)
    .addField(':id:**__ ايدي السيرفر__**',`**${message.guild.id}**`,true)
    message.channel.send({embed:embed});
  }
});

client.on('message', message => {
  if(message.content.includes('discord.gg')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
  }
}
});

client.on('message', message => {
  if(message.content.includes('youtube')){
                                          if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
      if (!message.member.hasPermissions(['ADMINISTRATOR'])){
      message.delete()
  return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
  }
}
});

client.on('message', message => {
  if(message.content.startsWith(prefix + "invite")) { 
  message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
  }
  });

  client.on("message", message => {
    var prefix = "!"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

    const cuttweet = [
      'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
      'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
      'كت تويت | الحرية لـ ... ؟',
      'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
      'كت تويت ‏| كلمة للصُداع؟',
      'كت تويت ‏| ما الشيء الذي يُفارقك؟',
      'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
      'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
      'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
      'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
      '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
      'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
      '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
      '‏كت تويت | وش يفسد الصداقة؟',
      '‏كت تويت | شخص لاترفض له طلبا ؟',
      '‏كت تويت | كم مره خسرت شخص تحبه؟.',
      '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
      '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
      '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
      '‏كت تويت |أقوى كذبة مشت عليك ؟',
      '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
      'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
      '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
      '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
      '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
      '‏كت تويت | مطلبك الوحيد الحين ؟',
      '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
 ]

 client.on('message', message => {
  if (message.content === "!help") {
message.author.send("***SkillsBot***" + `  **
∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞
📝 | الاوامر العامة | 📝
!id | للايدي 🆔  
!avatar | للافاتار 📍
!ping | لمعرفة بينق البوت 📡
!invite | لدعوة البوت 📎
!bot | للمعلومات عن البوت 📖
!server | للمعلومات عن السيرفر 🎎
!e | يكتبلك كلامك بالايموجي
∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞
📞 | اوامر الادمنيه | 📞
!bc
!ban
!mute
!unmute
!kick
!clear
∞⋅∾◅▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▻∾⋅∞
🎮 | اوامر الالعاب | 🎮
!فكك 
!اسالني
!كت تويت
!marry
!عقاب
**`);
 }
});

client.on('message', message => {
  const prefix = '!'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': 🔱 | اسمك',`**<@` + `${z.id}` + `>**`, true)
.addField(': 🛡 | ايديك', "**"+ `${z.id}` +"**",true)
.addField(': ♨ | Playing','**'+y+'**' , true)
.addField(': 📛 | تاق حق حسابك',"**#" +  `${z.discriminator}**`,true)
.addField('**: 📆 | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
.addField("**: ⌚ | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

client.on("message", message => {
  var prefix = "!";

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
      var msg;
      msg = parseInt();
    
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تــم مسح الشات",
      color: 0x06DF00,
      description: "تم مسح الرسائل ",
      footer: {
        text: "©zabhm"
      }
    }}).then(msg => {msg.delete(3000)});
                        }

   
}); 

client.on("message", message => {
  if (message.content === "!avatar") {
   const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setFooter('By ImM7MD')
       .setThumbnail(message.author.avatarURL)
       .addField(message.author.displayAvatarURL)
 message.channel.send(embed);
}
});

client.on('message', async message => {
  let muteReason = message.content.split(" ").slice(3).join(" ");
  let mutePerson = message.mentions.users.first();
  let messageArray = message.content.split(" ");
  let muteRole = message.guild.roles.find(r => r.name === 'Muted');
  let time = messageArray[2];
  if(message.content.startsWith(prefix + "tempmute")) {
      if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send('**- You don\'t have the needed permissions!**');
      if(!mutePerson) return message.channel.send("**- Mention someone!**");
      if(mutePerson === message.author) return message.channel.send('**- You cannot mute yourself!**');
      if(mutePerson === client.user) return message.channel.send('**- You cannot mute me!**');
      if(message.guild.member(mutePerson).roles.has(muteRole.id)) return message.channel.send('**- This person is already muted!**');
      if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
      if(!time) return message.channel.send("**- Supply a time!**");
      if(!time.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send('**- Supply a real time!**');
      if(!muteReason) return message.channel.send("**- Supply a reason!**");
      message.guild.channels.forEach(async (channel, id) => {
    message.channel.overwritePermissions(muteRole, {
      SEND_MESSAGES: true,
      ADD_REACTIONS: true
    });
  });
      message.guild.member(mutePerson).addRole(muteRole);
      let muteEmbed = new Discord.RichEmbed()
      .setAuthor(`${mutePerson.username}#${mutePerson.discriminator}`,mutePerson.avatarURL)
      .setTitle(`You have been muted in ${message.guild.name}`)
      .setThumbnail(message.guild.iconURL)
      .addField('- Muted By:',message.author,true)
      .addField('- Reason:',muteReason,true)
      .addField('- Duration:',`${mmss(mmss(time), {long: true})}`)
      .setFooter(message.author.username,message.author.avatarURL);
      message.guild.member(mutePerson).sendMessage(muteEmbed)
      message.channel.send(`**- Done!, I muted: ${mutePerson}**`)
      .then(() => { setTimeout(() => {
         message.guild.member(mutePerson).removeRole(muteRole);
     }, mmss(time));
  });
  }
})

       client.login('NDU4MzgyNjM4NzM1MTYzNDIy.DgqYHg.LGfcTrlcm35TyQ-fQ1SWhbM4Uhg');    //توكن بوتك

