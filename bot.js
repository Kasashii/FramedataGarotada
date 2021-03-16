const Discord = require("discord.js");

const { prefix, BOT_TOKEN } = require("./config.json");

const ytdl = require("ytdl-core");

const client = new Discord.Client(); 

const config = require("./config.json"); 

const dotenv = require('dotenv');

if(process.env.NODE_ENV !== 'production')
    dotenv.config();
    
const { BOT_TOKEN } = process.env;

client.on("ready", () => {
  console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`); 
  client.user.setPresence({ game: { name: 'comando', type: 0, message: 'Olá!'} });
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;  

    function getRandomItem(arr) {

     
      const randomIndex = Math.floor(Math.random() * arr.length);
  
      
      const item = arr[randomIndex];
  
      return item;
  }
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  const arrayjerma = [
    {files: [`./jerma/jerma.png`]},
    {files: [`./jerma/jerma1.gif`]},
    {files: [`./jerma/jerma2.gif`]},
    {files: [`./jerma/jerma3.gif`]},
    {files: [`./jerma/jerma5.gif`]},
    {files: [`./jerma/jerma6.gif`]},
    {files: [`./jerma/jerma7.gif`]},
    {files: [`./jerma/jerma9.gif`]},
    {files: [`./jerma/jerma10.gif`]},
    {files: [`./jerma/jerma11.gif`]},
    {files: [`./jerma/jerma12.gif`]},
    {files: [`./jerma/jerma13.gif`]},
    {files: [`./jerma/jerma14.gif`]}
  ]
const deep1 = ("https://twitter.com/DeepLeffen/status/1371913555067437064?s=20")
const deep2 = ("https://twitter.com/DeepLeffen/status/1369702619627851783?s=20")
const deep3 = ("https://twitter.com/DeepLeffen/status/1369318200576520203?s=20")
const deep4 = ("https://twitter.com/DeepLeffen/status/1368980838499647494?s=20")
const deep5 = ("https://twitter.com/DeepLeffen/status/1367151773203509255?s=20")
const deep6 = ("https://twitter.com/DeepLeffen/status/1360270955055116294?s=20")
const deep7 = ("https://twitter.com/DeepLeffen/status/1358929244714328064?s=20")
const deep8 = ("https://twitter.com/DeepLeffen/status/1351195546158030850?s=20")
const deep9 = ("https://twitter.com/DeepLeffen/status/1349059628466925571?s=20")
const deep10 = ("https://twitter.com/DeepLeffen/status/1346523904257482755?s=20")
const deep11 = ("https://twitter.com/DeepLeffen/status/1341839342826889217?s=20")
const deep12 = ("https://twitter.com/DeepLeffen/status/1341423217911750664?s=20")
const deep13 = ("https://twitter.com/DeepLeffen/status/1333823230851866624?s=20")
const deep14 = ("https://twitter.com/DeepLeffen/status/1328781565590196225?s=20")
const deep15 = ("https://twitter.com/DeepLeffen/status/1328382682959589382?s=20")
const deep16 = ("https://twitter.com/DeepLeffen/status/1326577401032302593?s=20")
const deep17 = ("https://cdn.discordapp.com/attachments/745625387433721866/821490434441347113/20200703_082652.jpg")
const smh = ("https://tenor.com/view/ena-joel-g-joel-gena-temptation-stairway-ena-nod-gif-20387490")

  const arraydeeplef = [
    (deep1),
    (deep2),
    (deep3),
    (deep4),
    (deep5),
    (deep6),
    (deep7),
    (deep8),
    (deep9),
    (deep10),
    (deep11),
    (deep12),
    (deep13),
    (deep14),
    (deep15),
    (deep16),
    (deep17)
  ]
  const resultdeeplef = getRandomItem(arraydeeplef)
  const resultjerma = getRandomItem(arrayjerma)
  const csk = ("**Link para o combosuki:** \nhttps://combosuki.com/")


  
  if(comando === "aaaaa") {
    message.channel.send ({files: [`./audios/aaaaaaaaaa.mp3`]});
  }
  
  if(comando === "acidoforadecontexto") {
    message.channel.send ({files: [`./audios/acidoforadecontexto.mp3`]});
  }
    
  if(comando === "acontecendovelho") { 
    message.channel.send ({files: [`./audios/acontecendovelho.mp3`]});
  }
    
  if(comando === "ala_ala") {
    message.channel.send ({files: [`./audios/ala_ala.mp3`]});
  }
    
  if(comando === "alpha") {
    message.channel.send ({files: [`./audios/alpha.mp3`]});
  }
    
  if(comando === "americanos") {
    message.channel.send ({files: [`./audios/americanos.mp3`]});
  }
    
  if(comando === "antiaereo") {
    message.channel.send ({files: [`./audios/antiaereo.mp3`]});
  }
    
  if(comando === "aviao") {
    message.channel.send ({files: [`./audios/aviao.mp3`]});
  }
    
  if(comando === "band") {
    message.channel.send ({files: [`./audios/band.mp3`]});
  }
    
  if(comando === "barradele") {
    message.channel.send ({files: [`./audios/barradele.mp3`]});
  }
    
  if(comando === "botaoerrado") {
    message.channel.send ({files: [`./audios/botaoerrado.mp3`]});
  }
    
  if(comando === "cabo_cabo") {
    message.channel.send ({files: [`./audios/cabo-cabo.mp3`]});
  }
    
  if(comando === "cagada") {
    message.channel.send ({files: [`./audios/cagada.mp3`]});
  }
    
  if(comando === "charerrado") {
    message.channel.send ({files: [`./audios/charerrado.mp3`]});
  }
 
  if(comando === "chefkiss") {
    message.channel.send ({files: [`./audios/chefskiss.mp3`]})
  }
    
  if(comando === "cidade") {
    message.channel.send ({files: [`./audios/cidade.mp3`]});
  }
    
  if(comando === "coisasruins") {
    message.channel.send ({files: [`./audios/converteunada.mp3`]});
  }
    
  if(comando === "dashnamoeda") {
    message.channel.send ({files: [`./audios/dashnamoeda.mp3`]});
  }
    
  if(comando === "ehehehaha") {
    message.channel.send ({files: [`./audios/ehehehaha.mp3`]});
  }
    
  if(comando === "ehtrivial") {
    message.channel.send ({files: [`./audios/ehtrivial.mp3`]});
  }
    
  if(comando === "explodiu") {
    message.channel.send ({files: [`./audios/explodiu.mp3`]});
  }
    
  if(comando === "facildepunir") {
    message.channel.send ({files: [`./audios/facildepunir.mp3`]});
  }
    
  if(comando === "funcionocomo") {
    message.channel.send ({files: [`./audios/funcionocomo.mp3`]});
  }
    
  if(comando === "justblock") {
    message.channel.send ({files: [`./audios/justblock.mp3`]});
  }
    
  if(comando === "masoq") {
    message.channel.send ({files: [`./audios/masoq.mp3`]});
  }
    
  if(comando === "moeda") {
    message.channel.send ({files: [`./audios/moeda.mp3`]});
  }
    
  if(comando === "muitounsaaaaaaafe") {
    message.channel.send ({files: [`./audios/muitounsaaaaaaafe.mp3`]});
  }
    
  if(comando === "naoentendo") {
    message.channel.send ({files: [`./audios/naoentendo.mp3`]});
  }
    
  if(comando === "naomatou") {
    message.channel.send ({files: [`./audios/naomatou.mp3`]});
  }
    
  if(comando === "naoseique") {
    message.channel.send ({files: [`./audios/naoseique.mp3`]});
  }
    
  if(comando === "naoseuidiota") {
    message.channel.send ({files: [`./audios/naoseuidiota.mp3`]});
  }
    
  if(comando === "neutro_ex") {
    message.channel.send ({files: [`./audios/neutro_ex.mp3`]});
  }
    
  if(comando === "neutro") {
    message.channel.send ({files: [`./audios/neutro.mp3`]});
  }
    
  if(comando === "notlikethis") {
    message.channel.send ({files: [`./audios/notlikethis.mp3`]});
  }
    
  if(comando === "notots") {
    message.channel.send ({files: [`./audios/notots.mp3`]});
  }
    
  if(comando === "olhaabarra") {
    message.channel.send ({files: [`./audios/olhaabarra.mp3`]});
  }
    
  if(comando === "oloooooco") {
    message.channel.send ({files: [`./audios/oloooooco.mp3`]});
  }
    
  if(comando === "oquequefoiisso") {
    message.channel.send ({files: [`./audios/oquequefoiisso.mp3`]});
  }
    
  if(comando === "para") {
    message.channel.send ({files: [`./audios/para-de-chamar-a-parasoul.mp3`]});
  }
    
  if(comando === "puniueocaralho") {
    message.channel.send ({files: [`./audios/puniuehocaralho.mp3`]});
  }
    
  if(comando === "qqeufiz") {
    message.channel.send ({files: [`./audios/qqeufiz.mp3`]});
  }
    
  if(comando === "idiota_ex") {
    message.channel.send ({files: [`./audios/seuidiotavideo.mp3`]});
  }
    
  if(comando === "snap") {
    message.channel.send ({files: [`./audios/snapcomoreversal.mp3`]});
  }
    
  if(comando === "snapdenovo") {
    message.channel.send ({files: [`./audios/snapdenovo.mp3`]});
  }
    
  if(comando === "teabag") {
    message.channel.send ({files: [`./audios/teabag.mp3`]});
  }
      
  if(comando === "trollou") {
    message.channel.send ({files: [`./audios/trollou.mp3`]});
  }
      
  if(comando === "vaipunir") {
    message.channel.send ({files: [`./audios/vaipunir.mp3`]});
  }
      
  if(comando === "vitima2") {
    message.channel.send ({files: [`./audios/vitima2.mp3`]});
  }
  
  if(comando === "what") {
    message.channel.send ({files: [`./audios/what.mp3`]});
  }
  
  if(comando === "audios") {
    message.channel.send ("Comandos disponíveis: \n > 'aaaaa' (5 letras a) \n > 'acidoforadecontexto' \n > 'acontecendovelho' \n > 'ala_ala' \n > 'alpha' \n > 'americanos' \n > 'antiaereo' \n > 'aviao' \n > 'band' \n > 'barradele' \n > 'botaoerrado' \n > 'cabo_cabo' \n > 'cagada' \n > 'charerrado' \n > 'chefkiss' \n > 'cidade' \n > 'coisasruins' \n > 'dashnamoeda' \n > 'ehehehaha' \n > 'ehtrivial' \n > 'explodiu' \n > 'facildepunir' \n > 'funcionocomo' \n > 'justblock' \n > 'masoq' \n > 'moeda' \n > 'muitounsaaaaaaafe' (7 letras a) \n > 'naoentendo' \n > 'naomatou' \n > 'naoseique' \n > 'naoseuidiota' \n > 'neutro_ex' \n > 'neutro' \n > 'notlikethis' \n > 'notots' \n > 'olhaabarra' \n > 'oloooooco' (5 letras o) \n > 'oquequefoiisso' \n > 'para' \n > 'puniueocaralho' \n > 'qqeufiz' \n > 'idiota_ex' \n > 'snap' \n > 'snapdenovo' \n > 'teabag' \n > 'trollou' \n > 'vaipunir' \n > 'vitima2' \n > 'what' \n OBSERVAÇÃO: Os parênteses em alguns áudios é apenas para avisar a quantidade de vezes que uma letra se repete, não é necessário utiliza-lo na execução do áudio.")
  }
  if(comando === "hug") {
    message.channel.send (`${message.author} **deu um abraço em** ${message.mentions.members.first()}**!!**`, {files: [`./gifs/hug.gif`]})
  }
  if(comando === "jerma") {
    message.channel.send (resultjerma)
  }
    if(comando === "combosuki") {
      message.channel.send (csk)
    }
    if(comando === "csk") {
      message.channel.send (csk)
    }
    if(comando === "deeplef") {
      message.channel.send (resultdeeplef)
    }
    if(comando === "smh") {
      message.channel.send (smh)
    }
});
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const serverQueue = queue.get(message.guild.id);

  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
  } else {
    message.channel.send("You need to enter a valid command!");
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
   };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Start playing: **${song.title}**`);
}

client.login(BOT_TOKEN);