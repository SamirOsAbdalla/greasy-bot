import { Client, ChatInputCommandInteraction } from "discord.js"


module.exports = {
    name: "ping",
    description: "Replies with 'Pong!'",
    // devOnly: ,
    // testOnly: ,
    // options:,
    deleted: true,
    callback: async (client: Client, interaction: ChatInputCommandInteraction) => {
    }
}
