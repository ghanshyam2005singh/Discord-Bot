const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

//Bot Ready to reply of your Hii message
client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.reply({ content: "Hii, From Bot",});
    console.log(message.content);
});

//This just and example of interaction Event, you can add more events
client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("Pong!!");
});

client.login("your_discord_bot_token").catch(error => console.error("Failed to login:", error));;