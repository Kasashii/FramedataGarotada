const Discord = require("discord.js");

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
    message.channel.send ({files: [`./audios/vitima2.mp3`]})
  }
  
  if(comando === "what") {
    message.channel.send ({files: [`./audios/what.mp3`]});
  }
  
  if(comando === "audios") {
    message.channel.send ("Comandos disponíveis: \n > 'aaaaa' (5 letras a) \n > 'acidoforadecontexto' \n > 'acontecendovelho' \n > 'ala_ala' \n > 'alpha' \n > 'americanos' \n > 'antiaereo' \n > 'aviao' \n > 'band' \n > 'barradele' \n > 'botaoerrado' \n > 'cabo_cabo' \n > 'cagada' \n > 'charerrado' \n > 'chefkiss' \n > 'cidade' \n > 'coisasruins' \n > 'dashnamoeda' \n > 'ehehehaha' \n > 'ehtrivial' \n > 'explodiu' \n > 'facildepunir' \n > 'funcionocomo' \n > 'justblock' \n > 'masoq' \n > 'moeda' \n > 'muitounsaaaaaaafe' (7 letras a) \n > 'naoentendo' \n > 'naomatou' \n > 'naoseique' \n > 'naoseuidiota' \n > 'neutro_ex' \n > 'neutro' \n > 'notlikethis' \n > 'notots' \n > 'olhaabarra' \n > 'oloooooco' (5 letras o) \n > 'oquequefoiisso' \n > 'para' \n > 'puniueocaralho' \n > 'qqeufiz' \n > 'idiota_ex' \n > 'snap' \n > 'snapdenovo' \n > 'teabag' \n > 'trollou' \n > 'vaipunir' \n > 'vitima2' \n > 'what' \n OBSERVAÇÃO: Os parênteses em alguns áudios é apenas para avisar a quantidade de vezes que uma letra se repete, não é necessário utiliza-lo na execução do áudio.")
  }
  if(comando === "rentaro_jA") {
    message.channel.send ("Rentaro j.A", {files: ['./images/rentaroja']});
  }
  if(comando === "hug") {
    message.channel.send (`${message.author} **deu um abraço em** ${message.mentions.members.first()}**, que fofura!**`, {files: [`./gifs/hug.gif`]})
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
});

client.login(BOT_TOKEN);