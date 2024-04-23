//This is the file for you can add your commands

const { REST, Routes } = require("discord.js");

//Sample Command
const commands = [
    {
        name: "ping",
        description: "Replies with Pong!",
    },
];

const rest = new REST({ version: "10"}).setToken("your_discord_bot_token");

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
        await rest.put(Routes.applicationCommands("discord_client_id"), { body: commands });
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();