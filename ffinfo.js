module.exports.config = {
  name: "ffinfo",
  version: "2.1",
  hasPermssion: 0,
  credits: "Lonely",
  description: "Info FF UID",
  commandCategory: "Jeux",
  usages: "[UID]",
  cooldowns: 3
};

module.exports.run = async ({ api, event, args }) => {
  const u = args[0];
  if (!u || isNaN(u))
    return api.sendMessage("❌ UID invalide. Ex: ¥ffinfo 61581453916589", event.threadID);
  const r = u.startsWith("1") ? "🇮🇳 Inde" : u.startsWith("6") ? "🇧🇷 Brésil" : u.startsWith("7") ? "🇲🇽 Amérique" : u.startsWith("3") ? "🇵🇰 Pakistan" : "🇪🇺 Europe";
  return api.sendMessage(`╭━━━━━━━━━━━━━━╮\n┃ 🎮 FREE FIRE INFO ┃\n╰━━━━━━━━━━━━━━╯\n\n👤 UID: ${u}\n🌍 Région: ${r}\n⚠️ API Garena bloquée 2025\n🔒 Garena a fermé toutes API\nNom/Niveau/Likes impossibles\n💡 Vérifie sur ff.garena.com`, event.threadID);
};
