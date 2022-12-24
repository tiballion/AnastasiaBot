const {  SlashCommandBuilder, EmbedBuilder } = require('discord.js');


const createEmbed = () => {
	const embed = new EmbedBuilder()
		.setTitle('Giveaway')
		.setDescription('React to this message to enter the giveaway!')
		.setColor('#FF0000')
	return embed;
}

const createGiveaway = (channel) => {
	channel.send({ embeds: [createEmbed()] });
}

const checkGiveawayChannel = (interaction) => {
	const guild = interaction.guild;
	const channels = guild.channels.cache;
	const giveawayChannel = channels.find(channel => channel.name === 'giveaways');
	if(giveawayChannel) createGiveaway(giveawayChannel);
	return giveawayChannel;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('giveaway')
		.setDescription('Create a giveaway!')
		.addStringOption(option => option.setName('text').setDescription('the text')),
	async execute(interaction) {
		const question = interaction.options.getString('text');
		const sender = interaction.user;
		const giveaway = checkGiveawayChannel(interaction);
		const reponse = giveaway ? `The giveaway is ${giveaway}!` : `There is no giveaway channel!`;
		await interaction.reply(reponse);
	},
};