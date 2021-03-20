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
const leaderboard = ("```js\n- TORNEIO DA GAROTADA - > 2021: ```\n```LEADERBOARD  --   PLAYER   -------   SCORE```\n:zero::one:|:stop_button:            **|**     `Ikkisoad`                  **|**     *73/38*\n:zero::two:|:stop_button:            **|**     `Ryuuji_kei`              **|**     *63/52*\n:zero::three:|:stop_button:            **|**     `ShinyPine`                **|**     *51/53*\n:zero::four:|:stop_button:            **|**     `Vargão`                      **|**     *32/27*\n:zero::five:|:stop_button:            **|**     `Aristal`                    **|**     *25/15*\n:zero::six:|:stop_button:            **|**     `Kasashi`                    **|**     *22/44*\n:zero::seven:|:stop_button:            **|**     `CrushMachine`          **|**    *15/1*\n:zero::eight:|:stop_button:            **|**     `danieldx`                  **|**    *13/8*\n:zero::nine:|:stop_button:            **|**     `Shieda`                      **|**    *13/46*\n:one::zero:|:stop_button:            **|**     `LochNessMobster`   **|**    *12/10*\n:one::one:|:arrow_double_up:            **|**     `Athylia`                   **|**     *12/27*\n:one::two:|:arrow_down_small:            **|**     `handsforup`             **|**     *9/2*\n:one::three:|:arrow_down_small:            **|**     `Kaito`                       **|**     *9/11*\n:one::four:|:stop_button:            **|**     `Army`                         **|**     *3/6*\n:one::five:|:stop_button:            **|**     `Sewdras`                   **|**     *1/6*")
const shiny = ("https://cdn.discordapp.com/attachments/772262752340934670/822540737173913610/Shinypine5.png")
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
  const inteligente = ("https://media.discordapp.net/attachments/772262752340934670/821546797163347988/Capturar24.PNG")
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
  if(comando === "inteligente") {
      message.channel.send (inteligente)
  }
  if(comando === "leaderboard") {
    message.channel.send(leaderboard)
  }
  if(comando === "mains_ikki") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Ikkisoad**\n> `Sets:` *73/38.*\n> `Rank:` *1st.*\n> `Winrate:` *65%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Ibuki.*\n========================\n> `Jogo:` **Alpha 3**\n> `Personagem:` *R. Mika.*\n>========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Lambda-11.*\n>========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Shana.*\n> **Assist/Burst:** *LLENN/Enju.*\n>========================\n> `Jogo:` **EFZ**\n> `Personagem:` *Kano.*\n>========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Dizzy.*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Mariah.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Shin Hisako.*\n========================\n> `Jogo:` **KOF XIII**\n> `Personagens:` *Yuri Sakazaki e Athena Asamiya.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *White Len.*\n> `Moon:` *Half.*\n========================\n> `Jogo:` **Monster**\n> `Personagem:` *Siely.*\n========================\n> `Jogo:` **Nitroplus**\n> `Personagens:` *Al, Yuki, Mugen.*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *Nakouru.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Ibuki.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Valentine, Cerebella, Robo-Fortune.*\n========================\n> `Jogo:` **TFH**\n> `Personagem:` *Velvet.*\n========================\n> `Jogo:` **Touhou**\n> `Personagem:` *Remilia.*\n========================\n> `Jogo:` **UNICLR**\n> `Personagem:` *Linne.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Lilith.*")
  }
  if(comando === "mains_shiny") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **ShinyPine**\n> `Sets:` *51/53.*\n> `Rank:` *3rd.*\n> `Winrate:` *49%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Makoto.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Es.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Yuuki.*\n> `Assists:`  *Dokoro ou Zero.*\n========================\n> `Jogo:` **EFZ**\n> `Personagem:` *Minagi.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Venom.*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Jotaro.*\n========================\n> `Jogo:` **Melty**\n>  `Personagem:` *Ryougi.*\n>  `Moon:` *Half.*\n========================\n> `Jogo:` **Monster.**\n> `Personagem:` *Delga.*\n> `Stance:` *Monster.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Peacock, Squigly e Big band.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Q-Bee.*")
  }
  if(comando === "mains_crush") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **CrushMachine**\n> `Sets:` *15/1.*\n> `Rank:` *7th.*\n> `Winrate:` *93%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Ibuki.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Millia.*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *Basara.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Juri.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Valentine, Robo-Fortune.*\n========================\n> `Jogo:` **Tekken**\n>  `Personagem:` *Kunimitsu.*\n========================\n> `Jogo:` **UNI**\n> `Personagem:` *Merkava.*")
  }
  if(comando === "mains_vargao") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Vargão**\n> `Sets:` *32/27.*\n> `Rank:` *4th.*\n> `Winrate:` *54%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Alex.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Shizuo.*\n> **Assist/Burst:** *Dokoro/Izaya.*\n>========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Johnny.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Shadow Jago.*\n========================\n> `Jogo:` **KOF 2002**\n> `Personagens:` *Clark Steel.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *Roa.*\n> `Moon:` *Crescent*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *Tokugawa Yoshitora.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Alex.*\n========================\n> `Jogo:` **Tekken**\n>  `Personagens:`  *Bryan Fury.*\n========================\n> `Jogo:` **UNICLR**\n> `Personagem:` *Yuzuriha.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Jon Talbain/Gallon.*")
  }
  if(comando === "mains_aristal") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Aristal**\n> `Sets:` *25/15.*\n> `Rank:` *5th.*\n> `Winrate:` *62%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Urien, Ken e Dudley.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Eliza, Parasoul, Squigly, Cerebella e Annie.*\n========================\n> `Jogo:` **Tekken**\n> `Personagem:` *Steve Fox*\n========================\n> `Jogo:` **UNICLR**\n> `Personagem:` *Byakuya e Hilda.*")
  }
  if(comando === "mains_shieda") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Shieda**\n> `Sets:` *25/15.*\n> `Rank:` *9th.*\n> `Winrate:` *22%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Makoto.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Terumi.*\n========================\n> `Jogo:` **BBTAG**\n> `Personagens:` *Yuzuriha, Adachi, Susanoo, Seth, Carmine, Yang, Akatsuki*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Tatsuya.*\n> **Assist/Burst:** *Celty, Rusian, Dokuro.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Zappa.*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Black Polnareff.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *TJ, Hisako.*\n========================\n> `Jogo:` **Nitroplus**\n> `Personagens:` *Saber, Dragon.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Seth.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Beowulf, BigBand.*")
  }
  if(comando === "mains_army") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Army**\n> `Sets:` *3/6.*\n> `Rank:` *14th.*\n> `Winrate:` *33%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Twelve.*\n========================\n> `Jogo:` **Alpha 3**\n> `Personagem:` *Adon.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Carl.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Miyuki.*\n> **Assist/Burst:** *LLENN/Enju.*\n========================\n> `Jogo:` **EFZ**\n> `Personagem:` *Nayuki (Awake).*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *A.B.A..*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Midler.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *Sion Tatari.*\n> `Moon:` *Full.*\n========================\n> `Jogo:` **Monster**\n> `Personagem:` *Othello.*\n========================\n> `Jogo:` **Nitroplus**\n> `Personagens:` *Mora.*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *Rimururu.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Eliza, Painwheel, Squigly.*\n========================\n> `Jogo:` **Touhou**\n> `Personagem:` *Marisa.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Zabel.*")
  }
  if(comando === "mains_loch") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **LochNessMobster**\n> `Sets:` *12/10.*\n> `Rank:` *10th.*\n> `Winrate:` *54%.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Faust.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Aganos.*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *TamTam.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Cerebella, BigBand.*")
  }
  if(comando === "mains_daniel") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **DanielDX**\n> `Sets:` *13/8.*\n> `Rank:` *8th.*\n> `Winrate:` *61%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Alex.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Potemkin.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Thunder.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Alex.*")
  }
  if(comando === "mains_ryuuji") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Ryuuji-K**\n> `Sets:` *63/52.*\n> `Rank:` *2nd.*\n> `Winrate:` *54%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Ryu.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Mu12.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Ako.*\n> **Assist/Burst:** *Rusian.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *May e Zappa.*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Hol Horse.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Eagle.*\n========================\n> `Jogo:` **KOF XIII**\n> `Personagens:` *Yuri, Terry e Kenso.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *Aoko.*\n> `Moon:` *Crescent.*\n========================\n> `Jogo:` **Nitroplus**\n> `Personagens:` *Ein.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Parasoul, Robo-fortune, Peacock.*\n========================\n> `Jogo:` **TFH**\n> `Personagem:` *Velvet.*\n========================\n> `Jogo:` **UNICLR**\n> `Personagem:` *Nanase.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Lei-Lei (Hsien-ko).*")
  }
  if(comando === "mains_hands") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **HandsForUp**\n> `Sets:` *9/2.*\n> `Rank:` *12th.*\n> `Winrate:` *90%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Makoto.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Blanka.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *BigBand.*\n========================\n> `Jogo:` **TFH**\n> `Personagem:` *Tian-Huo.*")
  }
  if(comando === "mains") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n`g!mains_aristal`\n`g!mains_army`\n`g!mains_crush`\n`g!mains_daniel`\n`g!mains_hands`\n`g!mains_ikki`\n`g!mains_loch`\n`g!mains_ryuuji`\n`g!mains_shieda`\n`g!mains_shiny`\n`g!mains_vargao`")
  }
});
client.login(BOT_TOKEN);