const { Client, Intents, SlashCommandBuilder, Events } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({ intents: [] });

client.once(Events.ClientReady, (c) => {
  console.log(`Logged in as ${c.user.tag}`);

  const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription('Replies with "Pong"');

  const hello = new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Says hello to someone");

  client.application.commands.create(ping, "add token");
  client.application.commands.create(hello, "add token");
});

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "ping") {
    interaction.reply("Pong!");
  }
  if (interaction.commandName === "hello") {
    interaction.reply(`Hello ${interaction.user.tag}`);
  }
});

client.login(token);
