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
    if(!message.content.startsWith(config.prefix)) return;  ;
   function getRandomItem(arr) {

     
      const randomIndex = Math.floor(Math.random() * arr.length);
  
      
      const item = arr[randomIndex];
  
      return item;
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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
 const leaderboard2 = ("```js\n- TORNEIO DA GAROTADA - > 2021: ```\n```LEADERBOARD  --   PLAYER   -------   SCORE```\n:zero::one:|:stop_button:            **|**     `Ikkisoad`                  **|**     *92/46*\n:zero::two:|:arrow_up_small:            **|**     `ShinyPine`                **|**     *70/70*\n:zero::three:|:arrow_down_small:            **|**     `Ryuuji_kei`              **|**     *68/60*\n:zero::four:|:stop_button:            **|**     `Vargão`                      **|**     *32/27*\n:zero::five:|:stop_button:            **|**     `Kasashi`                    **|**     *29/56*\n:zero::six:|:stop_button:            **|**     `Aristal`                    **|**     *25/15*\n:zero::seven:|:arrow_double_up:             **|**     `Kaito`          **|**    *16/21*\n:zero::eight:|:arrow_up_small:             **|**     `Shieda`                      **|**    *16/57*\n:zero::nine:|:arrow_double_down:            **|**     `Crushmachine`          **|**    *15/1*\n:one::zero:|:arrow_double_down:            **|**     `danieldx`                  **|**    *13/8*\n:one::one:|:arrow_double_up:            **|**     `Gaburo`                   **|**     *12/6*\n:one::two:|:arrow_double_down:            **|**     `LochNessMobster`   **|**     *12/10*\n:one::three:|:arrow_double_down:            **|**     `Athylia`                       **|**     *12/27*\n:one::four:|:arrow_double_down:            **|**     `handsforup`                         **|**     *9/2*\n:one::five:|:arrow_down_small:            **|**     `Army`                   **|**     *3/6*\n:one::six:|:arrow_down_small:            **|**     `Sewdras`                   **|**     *1/6*")
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
  const athylia1 = ("https://media.discordapp.net/attachments/823669979802239067/832386544786604072/unknown.png")
  const athylia2 = ("https://media.discordapp.net/attachments/823669979802239067/834459604380287056/unknown.png")
  const athylia3 = ("https://media.discordapp.net/attachments/823669979802239067/834459868160327710/unknown.png")
  const athylia4 = ("https://media.discordapp.net/attachments/823669979802239067/832386544786604072/unknown.png")
  const athylia5 = ("https://media.discordapp.net/attachments/823669979802239067/834459604380287056/unknown.png")
  const athylia6 = ("https://media.discordapp.net/attachments/823669979802239067/834459868160327710/unknown.png")
  const athylia7 = ("https://media.discordapp.net/attachments/823669979802239067/832386544786604072/unknown.png")
  const athylia8 = ("https://media.discordapp.net/attachments/823669979802239067/834459604380287056/unknown.png")
  const athylia9 = ("https://media.discordapp.net/attachments/823669979802239067/834459868160327710/unknown.png")
  const athylia10 =("https://cdn.discordapp.com/attachments/772262752340934670/834935265642020904/athyliabelike.mp4")
  const athylia11 =("https://cdn.discordapp.com/attachments/772262752340934670/834935265642020904/athyliabelike.mp4")
  const athylia12 =("https://cdn.discordapp.com/attachments/772262752340934670/834935265642020904/athyliabelike.mp4")
  const athylia13 =("https://steamuserimages-a.akamaihd.net/ugc/272847314896601122/07DAE5EEFB4C07BDA8D6F9074984B68A49BC1D57/")
  const athylia14 =("https://steamuserimages-a.akamaihd.net/ugc/272847314896601122/07DAE5EEFB4C07BDA8D6F9074984B68A49BC1D57/")
  const athylia15 =("https://cdn.discordapp.com/attachments/187846760251654144/850786149144461322/annihilation.mp4")
  const athylia16 =("https://cdn.discordapp.com/attachments/187846760251654144/850786149144461322/annihilation.mp4")
  const arrayathylia = [
    (athylia1),
    (athylia2),
    (athylia3),
    (athylia4),
    (athylia5),
    (athylia6),
    (athylia7),
    (athylia8),
    (athylia9),
    (athylia10),
    (athylia11),
    (athylia12), 
    (athylia13),
    (athylia14), 
    (athylia15),
    (athylia16),
  ] 
const q1 = ("What was the last funny video you saw?")
const q2 = ("What do you do to get rid of stress?")
const q3 = ("What three words best describe you?")
const q4 = ("What would be your perfect weekend?")
const q5 = ("What’s the most useful thing you own?")
const q6 = ("What’s your favorite way to waste time?")
const q7 = ("Do you have any pets? What are their names?")
const q8 = ("Are you very active, or do you prefer to just relax in your free time?")
const q9 = ("What do you do when you hang out with your friends?")
const q10 =("Who is your oldest friend? Where did you meet them?")
const q11 =("What do you fear is hiding in the dark?")
const q12 =("What is the silliest fear you have?")
const q13 =("What are some things you want to accomplish before you die?")
const q14 =("if you had a wish, what would it be")
const q15 =("What weird or useless talent do you have?")
const q16 =("If you had intro music, what song would it be? Why?")
const q17 = ("What is the strangest dream you have ever had?")
const q18 = ("What is the most annoying habit someone can have?")
const q19 = ("What is the most disgusting habit some people have?")
const q20 = ("If You Could Erase One Event From History, Which One Would You Erase?")
const q21 = ("Where is the worst place you have been stuck for a long time?")
const q22 = ("What’s your favorite way to waste time?")
const q23 = ("How should success be measured? And by that measurement, who is the most successful person you know, following you ask?")
const q24 = ("If you had to change your name, what would your new name be?")
const q25 = ("If you could learn the answer to one question about your future, what would the question be?")
const q26 =("What’s the size of your shoes?")
const q27 =("What two languages would you like to be fluent in?")
const q28 =("If someone wrote a biography about you, what do you think the title should be?")
const q29 =("What is be happy to you?")
const q30 =("What’s the meaning of life in your opinion?")
const q31 =("If you could trade lives with anyone for a day who would it be and why?")
const q32 =("Last thing you bought?")
const q33 =("What is the funniest fg clip have ever seen?")
const q34 =("What is you favorite FG character?")
const q35 =("What is the cringey thing you did in your life?")
const arrayquestions = [
  (q1),
  (q2),
  (q3),
  (q4),
  (q5),
  (q6),
  (q7),
  (q8),
  (q9),
  (q10),
  (q11),
  (q12),
  (q13),
  (q14),
  (q15),
  (q16),
  (q17),
  (q18),
  (q19),
  (q20),
  (q21),
  (q22),
  (q23),
  (q24),
  (q25),
  (q26),
  (q27),
  (q28),
  (q29),
  (q30),
  (q31),
  (q32),
  (q33),
  (q34),
  (q35),
]
  const resultq = getRandomItem(arrayquestions)
  const resultathylia = getRandomItem(arrayathylia)
  const resultdeeplef = getRandomItem(arraydeeplef)
  const resultjerma = getRandomItem(arrayjerma)
  const randomnumber = getRandomInt(1,101)
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
    
  if(comando === "trivial") {
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
    message.channel.send ("Comandos disponíveis: \n > 'aaaaa' (5 letras a) \n > 'acidoforadecontexto' \n > 'acontecendovelho' \n > 'ala_ala' \n > 'alpha' \n > 'americanos' \n > 'antiaereo' \n > 'aviao' \n > 'band' \n > 'barradele' \n > 'botaoerrado' \n > 'cabo_cabo' \n > 'cagada' \n > 'charerrado' \n > 'chefkiss' \n > 'cidade' \n > 'coisasruins' \n > 'dashnamoeda' \n > 'ehehehaha' \n > 'trivial' \n > 'explodiu' \n > 'facildepunir' \n > 'funcionocomo' \n > 'justblock' \n > 'masoq' \n > 'moeda' \n > 'muitounsaaaaaaafe' (7 letras a) \n > 'naoentendo' \n > 'naomatou' \n > 'naoseique' \n > 'naoseuidiota' \n > 'neutro_ex' \n > 'neutro' \n > 'notlikethis' \n > 'notots' \n > 'olhaabarra' \n > 'oloooooco' (5 letras o) \n > 'oquequefoiisso' \n > 'para' \n > 'puniueocaralho' \n > 'qqeufiz' \n > 'idiota_ex' \n > 'snap' \n > 'snapdenovo' \n > 'teabag' \n > 'trollou' \n > 'vaipunir' \n > 'vitima2' \n > 'what' \n > 'ghostkid' \n OBSERVAÇÃO: Os parênteses em alguns áudios é apenas para avisar a quantidade de vezes que uma letra se repete, não é necessário utiliza-lo na execução do áudio.")
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
    message.channel.send(leaderboard2)
  }
  if(comando === "mains_ikki") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Ikkisoad**\n> `Sets:` *82/39.*\n> `Rank:` *1st.*\n> `Winrate:` *67%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Ibuki.*\n========================\n> `Jogo:` **Alpha 3**\n> `Personagem:` *R. Mika.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Lambda-11.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Shana.*\n> `Assist/Burst:` *LLENN/Enju.*\n========================\n> `Jogo:` **EFZ**\n> `Personagem:` *Kano.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Dizzy.*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Mariah.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Shin Hisako.*\n========================\n> `Jogo:` **KOF XIII**\n> `Personagens:` *Yuri Sakazaki e Athena Asamiya.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *White Len.*\n> `Moon:` *Half.*\n========================\n> `Jogo:` **Monster**\n> `Personagem:` *Siely.*\n========================\n> `Jogo:` **Nitroplus**\n> `Personagens:` *Al, Yuki, Mugen.*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *Nakouru.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Ibuki.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Valentine, Cerebella, Robo-Fortune.*\n========================\n> `Jogo:` **TFH**\n> `Personagem:` *Velvet.*\n========================\n> `Jogo:` **Touhou**\n> `Personagem:` *Remilia.*\n========================\n> `Jogo:` **UNICLR**\n> `Personagem:` *Linne.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Lilith.*")
  }
  if(comando === "mains_shiny") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **ShinyPine**\n> `Sets:` *61/62.*\n> `Rank:` *3rd.*\n> `Winrate:` *49%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Makoto.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Es.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Yuuki.*\n> `Assists:`  *Dokoro ou Zero.*\n========================\n> `Jogo:` **EFZ**\n> `Personagem:` *Minagi.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Venom.*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Jotaro.*\n========================\n> `Jogo:` **Melty**\n>  `Personagem:` *Ryougi.*\n>  `Moon:` *Half.*\n========================\n> `Jogo:` **Monster.**\n> `Personagem:` *Delga.*\n> `Stance:` *Monster.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Peacock, Squigly e Big band.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Q-Bee.*")
  }
  if(comando === "mains_crush") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **CrushMachine**\n> `Sets:` *15/1.*\n> `Rank:` *7th.*\n> `Winrate:` *93%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Ibuki.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Millia.*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *Basara.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Juri.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Valentine, Robo-Fortune.*\n========================\n> `Jogo:` **Tekken**\n>  `Personagem:` *Kunimitsu.*\n========================\n> `Jogo:` **UNI**\n> `Personagem:` *Merkava.*")
  }
  if(comando === "mains_vargao") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Vargão**\n> `Sets:` *32/27.*\n> `Rank:` *4th.*\n> `Winrate:` *54%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Alex.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Shizuo.*\n> `Assist/Burst:` *Dokoro/Izaya.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Johnny.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Shadow Jago.*\n========================\n> `Jogo:` **KOF 2002**\n> `Personagens:` *Clark Steel.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *Roa.*\n> `Moon:` *Crescent*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *Tokugawa Yoshitora.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Alex.*\n========================\n> `Jogo:` **Tekken**\n>  `Personagens:`  *Bryan Fury.*\n========================\n> `Jogo:` **UNICLR**\n> `Personagem:` *Yuzuriha.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Jon Talbain/Gallon.*")
  }
  if(comando === "mains_aristal") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Aristal**\n> `Sets:` *25/15.*\n> `Rank:` *5th.*\n> `Winrate:` *62%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Urien, Ken e Dudley.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Eliza, Parasoul, Squigly, Cerebella e Annie.*\n========================\n> `Jogo:` **Tekken**\n> `Personagem:` *Steve Fox*\n========================\n> `Jogo:` **UNICLR**\n> `Personagem:` *Byakuya e Hilda.*")
  }
  if(comando === "mains_shieda") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Shieda**\n> `Sets:` *13/51.*\n> `Rank:` *9th.*\n> `Winrate:` *20%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Makoto.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Terumi.*\n========================\n> `Jogo:` **BBTAG**\n> `Personagens:` *Yuzuriha, Adachi, Susanoo, Seth, Carmine, Yang, Akatsuki*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Tatsuya.*\n> `Assist/Burst:` *Celty, Rusian, Dokuro.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Zappa.*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Black Polnareff.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *TJ, Hisako.*\n========================\n> `Jogo:` **Nitroplus**\n> `Personagens:` *Saber, Dragon.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Seth.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Beowulf, BigBand.*")
  }
  if(comando === "mains_shieda") {
    message.channel.send ("https://cdn.discordapp.com/attachments/772262752340934670/825726195173031966/CBT.png")
  }
 if(comando === "mains_army") {
  message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Army**\n> `Sets:` *3/6.*\n> `Rank:` *14th.*\n> `Winrate:` *33%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Twelve.*\n========================\n> `Jogo:` **Alpha 3**\n> `Personagem:` *Adon.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Carl.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Miyuki.*\n> `Assist/Burst:` *Enju/Wilhelmina.*\n========================\n> `Jogo:` **EFZ**\n> `Personagem:` *Nayuki (Awake).*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *A.B.A..*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Midler.*\n========================\n> `Jogo:` **KOF 2002**\n> `Personagens:` *Bao, Chris e Nameless*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *Sion Tatari.*\n> `Moon:` *Full.*\n========================\n> `Jogo:` **Monster**\n> `Personagem:` *Othello.*\n========================\n> `Jogo:` **Nitroplus**\n> `Personagens:` *Mora.*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *Rimururu.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Eliza, Painwheel, Squigly.*\n========================\n> `Jogo:` **Touhou**\n> `Personagem:` *Marisa.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Zabel.*")
}
  if(comando === "mains_loch") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **LochNessMobster**\n> `Sets:` *12/10.*\n> `Rank:` *10th.*\n> `Winrate:` *54%.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Faust.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Aganos.*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *TamTam.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Cerebella, BigBand.*\n========================\n> `Jogo:` **UNI**\n> `Personagem:` *Merkava.*")
  }
  if(comando === "mains_daniel") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **DanielDX**\n> `Sets:` *13/8.*\n> `Rank:` *8th.*\n> `Winrate:` *61%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Alex.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Potemkin.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Thunder.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Alex.*")
  }
  if(comando === "mains_ryuuji") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Ryuuji-K**\n> `Sets:` *68/60.*\n> `Rank:` *2nd.*\n> `Winrate:` *53%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Ryu.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Mu12.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Ako.*\n> `Assist/Burst:` *Rusian.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *May e Zappa.*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Hol Horse.*\n========================\n> `Jogo:` **KI**\n> `Personagem:` *Eagle.*\n========================\n> `Jogo:` **KOF XIII**\n> `Personagens:` *Yuri, Terry e Kenso.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *Aoko.*\n> `Moon:` *Crescent.*\n========================\n> `Jogo:` **Nitroplus**\n> `Personagens:` *Ein.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Parasoul, Robo-fortune, Peacock.*\n========================\n> `Jogo:` **TFH**\n> `Personagem:` *Velvet.*\n========================\n> `Jogo:` **UNICLR**\n> `Personagem:` *Nanase.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Lei-Lei (Hsien-ko).*")
  }
  if(comando === "mains_hands") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **HandsForUp**\n> `Sets:` *9/2.*\n> `Rank:` *12th.*\n> `Winrate:` *90%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Makoto.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Blanka.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *BigBand.*\n========================\n> `Jogo:` **TFH**\n> `Personagem:` *Tian-Huo.*")
  }
  if(comando === "mains_kaito") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Kaito**\n> `Sets:` *9/11.*\n> `Rank:` *13th.*\n> `Winrate:` *45%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Alex.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *Hisui.*\n> `Moon:` *Full.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Beowulf, BigBand, Filia, Squigly.*")
  }
  if(comando === "mains_sewdras") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Sewdras**\n> `Sets:` *1/6.*\n> `Rank:` *15th.*\n> `Winrate:` *14%.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Kirino.*\n> `Assist/Burst:` *Kouko/Miyuki.*\n========================\n> `Jogo:` **EFZ**\n> `Personagem:` *Sayuri.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *White Len/Neko-Arc Chaos.*\n> `Moon:` *Crescent/Crescent.*\n========================\n> `Jogo:` **SFV**\n> `Personagem:` *Cammy/Menat.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Parasoul.*\n========================\n> `Jogo:` **UNICLR**\n> `Personagem:` *Vatista e Hilda.*")
  }
  if(comando === "mains_athylia") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Athylia**\n> `Sets:` *12/27.*\n> `Rank:` *11th.*\n> `Winrate:` *30%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Ken.*\n========================\n> `Jogo:` **Alpha 3**\n> `Personagem:` *Karin.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Rachel.*\n========================\n> `Jogo:` **EFZ**\n> `Personagem:` *Mai.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Sol.*\n========================\n> `Jogo:` **Monster**\n> `Personagem:` *Orju.*\n========================\n> `Jogo:` **Nitroplus**\n> `Personagens:` *Sonico.*\n========================\n> `Jogo:` **Samsho**\n> `Personagem:` *Ukyo Tachibana.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Parasoul/Double/Beowulf.*\n========================\n> `Jogo:` **Touhou**\n> `Personagem:` *Sakuya.*")
  }
  if(comando === "mains_alone") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Alone**\n> `Sets:` *N/A.*\n> `Rank:` *N/A.*\n> `Winrate:` *N/A.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Hugo.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Izayoi.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Mikoto.*\n> `Assist/Burst:` *N/A / N/A.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Jam.*\n========================\n> `Jogo:` **Skullgirls**\n> `Personagens:`  *MissFortune, Filia.*")
  }
  if(comando === "mains_kas") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n> `Jogador:` **Kasashi**\n> `Sets:` *27/50.*\n> `Rank:` *6th.*\n> `Winrate:` *35%.*\n========================\n> `Jogo:` **3S**\n> `Personagem:` *Ibuki.*\n========================\n> `Jogo:` **BBCF**\n> `Personagem:` *Naoto Kurogane.*\n========================\n> `Jogo:` **Dengeki**\n> `Personagem:` *Rentaro.*\n> `Assist/Burst:` *Sadao Maou/Izaya.*\n========================\n> `Jogo:` **EFZ**\n> `Personagem:` *Mai.*\n========================\n> `Jogo:` **Guilty gear +R**\n> `Personagem:`  *Bridget.*\n========================\n> `Jogo:` **Jojo**\n> `Personagem:` *Mariah.*\n========================\n> `Jogo:` **Melty**\n> `Personagem:` *Len/Vakiha.*\n> `Moon:` *Half/Full.*\n========================\n> `Jogo:` **Monster**\n> `Personagem:` *Maya.*\n========================\n> `Jogo:` **Skullgirls**\n>  `Personagens:`  *Valentine, Squigly, Cerebella.*\n========================\n> `Jogo:` **TFH**\n> `Personagem:` *Velvet.*\n========================\n> `Jogo:` **Touhou**\n> `Personagem:` *Alice.*\n========================\n> `Jogo:` **Vampire Savior**\n> `Personagem:` *Felicia.*")
  }
  if(comando === "mains") {
    message.channel.send ("```MAINS DA GAROTADA!!!```\n`g!mains_alone`\n`g!mains_aristal`\n`g!mains_army`\n`g!mains_athylia`\n`g!mains_crush`\n`g!mains_daniel`\n`g!mains_hands`\n`g!mains_ikki`\n`g!mains_kaito`\n`g!mains_kas`\n`g!mains_loch`\n`g!mains_ryuuji`\n`g!mains_sewdras`\n`g!mains_shieda`\n`g!mains_shiny`\n`g!mains_vargao`")
  }
  const neutral = ("https://media.discordapp.net/attachments/772273045229928488/822899783361495050/unknown.png")
  if(comando === "neutral") {
    message.channel.send (neutral)
  }
  const crounchinglightkick = ("https://media.discordapp.net/attachments/772273045229928488/822899906938798101/unknown.png")
  if(comando === "clk") {
    message.channel.send (crounchinglightkick)
  }
  const eliza = ("https://media.discordapp.net/attachments/772273045229928488/822254671347449906/unknown.png")
  if(comando === "1000horas") {
    message.channel.send (eliza)
  }
  if(comando === "milhoras") {
    message.channel.send (eliza)
  }
  if(comando === "ajuda") {
    message.channel.send ("```COMANDOS DA GAROTADA```\n**ADICIONADOS NO ÚLTIMO DEPLOY!**\n`g!ajuda`\n**INÚTEIS/FUN**\n`g!amigo`\n`g!garotada`\n`g!challonge`\n`g!torneio`\n`g!may`\n`g!fg`\n`g!noticia`\n`g!ikki`\n`g!parabens`\n`g!1000horas/g!milhoras`\n`g!cLK`\n`g!smh`\n`g!inteligente`\n`g!neutral`\n`g!deeplef`\n`g!jerma`\n**GAROTADA ISSUES**\n`g!aulas`\n`g!mains`\n`g!leaderboard`\n`g!csk OU g!combosuki`\n`g!audios`")
  }
  const aula1 = ("https://youtu.be/5wM0jqrGa0w")
  if(comando === "aula1") {
    message.channel.send (aula1)
  }
  const aula2 = ("https://youtu.be/-9TaSllE0Kg")
  if(comando === "aula2") {
    message.channel.send (aula2)
  }
  if(comando === "aulas") {
    message.channel.send ("```Aulas que o Loch deu!```\n`g!aula1`\n`g!aula2`")
  }
  if(comando === "ikki") {
    message.channel.send ("tudo o sucesso dos caras é pelo Ikki, eu acho q Ikki teria q ser nosso novo pilar, Ikki fiz mais q o Noaa pela comunidade, Ikki fiz mais q o Lugon pela comunidade, Ikki é o verdadeiro coraçao de Brasil, obrigado Ikki, obrigado Lobby da Garotada  ;p ;p")
  }
  if(comando === "parabens") {
    message.channel.send ("Parabéns pelo 2nd lugar!")
  }
  if(comando === "noticia") {
    message.channel.send ("a má notícia é que sim, você é um lixo. Como 99,9% dos players que passam pela minha mão. Você é evidentemente um amador total sem a noção mais basilar dos princípios fundamentais que regem todos os jogos de luta. Então antes de te ensinar 3rd strike, eu vou ter que te ensinar jogos de luta")
  }
  const may = ("https://clips.twitch.tv/UnsightlySaltyGullMVGame")
  if(comando === "may") {
    message.channel.send (may)
  }
  const fg = ("https://clips.twitch.tv/AbstemiousMistyPelicanPrimeMe")
  if(comando === "fg") {
    message.channel.send (fg)
  }
  if(comando === "inimigo") {
    message.channel.send (`${message.author.username} **É ${randomnumber}% INIMIGO DE ${user.username}!!!!**`)
  }
  let user = message.mentions.users.first()
  if(comando === "amigo") {
    message.channel.send (`${message.author.username} **é ${randomnumber}% amigo de** ${user.username}**!!!**`)
  }
  if(comando === "based") {
    message.channel.send (`${user.username} **é ${randomnumber}% based!!**`)
  }
  if(comando === "vitima") {
    message.channel.send (`${user.username} **é ${randomnumber} sua vítima.**`)
  }
  if(comando === "garotada") {
    message.channel.send (`${user.username} **é ${randomnumber} garotada.**`)
  }
  if(comando === "coomer") {
    message.channel.send (`${ user.username} **é ${randomnumber} coomer.**`)
  }
  const challongegarotada = ("https://challonge.com/pt_BR/communities/lobbydagarotada")
  if(comando === "challonge") {
    message.channel.send ("```CHALLONGE DA GAROTADA!```")
  }
  if(comando === "challonge") {
    message.channel.send (challongegarotada)
  }
  const torneiogarotada = ("https://challonge.com/3rmxd21e")
  if(comando === "torneio") {
    message.channel.send ("```LINK DO TORNEIO DA GAROTADA DESTA SEMANA!```")
  }
  if(comando === "torneio") {
    message.channel.send (torneiogarotada)
  }
  if(comando === "memex") {
    message.channel.send ("https://cdn.discordapp.com/attachments/772262752340934670/828660434407653386/Screenshot_6.png")
  }
  if(comando === "meme") {
    message.channel.send ("https://cdn.discordapp.com/attachments/724807845731631105/828660358859587654/unknown.png")
  }
  if(comando === "ghostkid") {
    message.channel.send ({files: [`./audios/GhostKid.mp3`]});
  }
  if(comando === "athylia") {
    message.channel.send (resultathylia);
  }
  if(comando === "pros") {
    message.channel.send ("https://cdn.discordapp.com/attachments/793260217420873749/832402416229154866/LDG_SO_Q_PNG.png");
  }
  if(comando === "cons") {
    message.channel.send ("https://cdn.discordapp.com/attachments/793260217420873749/832403620103716864/kasashi_so_q_png.png");
  }
  if(comando === `oolong`) {
    message.channel.send ({files:[`./gifs/oolongtea.mp4`]});
  }
  if(comando === `oolong_tea`) {
    message.channel.send ({files:[`./gifs/oolongtea.mp4`]});
  }
  if(comando === `tea`) {
    message.channel.send ({files:[`./gifs/oolongtea.mp4`]});
  }
  if(comando === `water`) {
    message.channel.send ({files:[`./gifs/water.mp4`]});
  }
  if(comando === `water_ex`) {
    message.channel.send ({files:[`./gifs/waterex.mp4`]});
  }
  if (comando === "drip") {
    message.channel.send ("https://media.discordapp.net/attachments/772262752340934670/833328507929100298/army_furro_drip_mas_agora_sem_fundo.png?width=391&height=559")
  };
  if (comando === "loser") {
    message.channel.send ("https://youtu.be/un2jJaiuwMI")
  }
  if (comando === "lab") {
    message.channel.send ("https://cdn.discordapp.com/attachments/772273045229928488/850447814165004298/2021-06-04_15-54-35.mp4")
  }
  if (comando === "rank") {
    message.channel.send ("https://media.discordapp.net/attachments/772273045229928488/853684645401329712/ZJeGhkc.png?width=562&height=585")
  }
    if (comando === "request") {
    message.channel.send ("<@611315038451662868> se liga ai ^")
  }
  if (comando === "paunocudojyuna") {
    message.channel.send ("Pau no cu do Jyuna")
  }
  if(comando === "topic") {
    message.channel.send (resultq)
  }
  if(comando === "neutro") {
    message.channel.send ("https://cdn.discordapp.com/attachments/782771452540878888/854008894669455400/2021-06-13_23-59-23.mp4")
  }

  if(comando === "teste") {
    message.channel.send(`${log0}, ${log1}`)
  }
  const log0 = console.log(args[0])
  const log1 = console.log(args[1])
  
  var BigBand = {
    move : { jMP: 11, jHK: 16 },
    charName : "BigBand"
  }
  
  var Parasoul = {
    move : { jMP : 12, jHK : 19 },
    charName : "Parasoul" 
  }
  if(comando === "teste"){
    message.channel.send(`${Parasoul.move.jMP}`)
  }

  var AliPar = [
    "para",
    "par",
    "parasoul",
    "pa",
    "paras",
    "paraso",
    "parasou"
  ]
    
  var AliBand = [
    "big",
    "bb",
    "bigb",
    "bigband"
  ]
  
  if(comando == "frame") {
  var fChoose;
  var sChoose;

   if(args[1].includes(AliPar)) {
     fChoose = Parasoul;
   } else if (args[1].includes(AliBand)) {
     fChoose = BigBand;
   }
      switch(args[2]) {
      case "jmp" : {
        var temp = "jMP -> ";
        sChoose = temp.concat(fChoose.move.jMP);
        break;
      }
      case "jhk" : {
        sChoose = "jHK -> ".concat(fChoose.move.jHK);
        break;
      }
    }
    message.channel.send(`${sChoose}`)
  } else {
    message.channel.send("tem algo de errado com o seu comando, revise e tente novamente.")
  } 
});
client.login(BOT_TOKEN);