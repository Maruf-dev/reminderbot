import { Telegraf } from 'telegraf';

const BOT_TOKEN = '7341084179:AAHXTbg4_KvJjLIVagTeCHWi-XZijAVZfRU';

const CHANNEL_ID = '@rem1ndthem';

const bot = new Telegraf(BOT_TOKEN);



const messages = [
  'Say — La ilaha illa Allah ☝🏻 Muhammad ﷺ Rasul Allah',
  'Say — Subhanallah',
  'Say — Subhanallahi va bixamdixi',
  'Say — Subhanallahiyl a’ziym',
  'Say — Inna lillahi va inna ilaihi rojiun',
  'Say — Hasbunallohu ve ne’mal vakil',
  'Say — Rabbi rhamhumaa kamaa rabbayaanee sogheeraa',
  'Say — Allahumma solli a’la sayyidina Muhammad ﷺ',
  'Say — Astag’firullah al aziym',
  'Say — Astag’firullah va atubu ilayhi',
  'Say — Bismillahir Rahmanir Raheem ﷽',
  'Say — Allahu Akbar',
  'Say — Astag’firullah',
  'Say — Alhamdulillah',
  'Say — Yaa muqallibal quluub, thabbit qalbee ‘alaa deenik',
  'Say — La x’aula va la quvvata illa billah',
  'Say — La ilaha illa anta subhanaka inniy kuntu minaz zolimiyn'
];


function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

setInterval(async () => {
  const shuffledMessages = shuffleArray(messages).slice(0, 3);

  for (const message of shuffledMessages) {
    try {
      await bot.telegram.sendMessage(CHANNEL_ID, message);
      console.log(`Sent message: ${message}`);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
}, 60 * 60 * 1000);;// 60 * 60 * 1000)



bot.launch();


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));