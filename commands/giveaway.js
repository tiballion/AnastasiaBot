const {  SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const SECONDS = 1000;


const createEmbed = (title) => {
	const embed = new EmbedBuilder()
		.setTitle(title)
		.setDescription('React to this message to enter the giveaway!')
		.setColor('#FF0000')
		.setTimestamp(Date.now());
	return embed;
}

const createGiveaway = (channel, title) => {
	channel.send({ embeds: [createEmbed(title)] }).then((message) => {
		message.react('🎉');
	})
}

const checkGiveawayChannel = (interaction) => {
	const guild = interaction.guild;
	const channels = guild.channels.cache;
	const giveawayChannel = channels.find(channel => channel.name === 'giveaways');
	if(giveawayChannel) createGiveaway(giveawayChannel, interaction.options.getString('title'));
	return giveawayChannel;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('giveaway')
		.setDescription('Create a giveaway!')
		.addStringOption(option => option.setName('title').setDescription('The title of the giveaway!'))
		.addChannelOption(option => option.setName('channel').setDescription('The channel to create the giveaway in!')),
	async execute(interaction) {
		/*const title = interaction.options.getString('title');
		const giveaway = checkGiveawayChannel(interaction);
		const reponse = giveaway ? `The giveaway is ${giveaway}!` : `There is no giveaway channel!`;
		await interaction.reply(reponse);*/
		console.log(interaction.options.getChannel('channel'));
		await interaction.reply("Hello!");
	},
};