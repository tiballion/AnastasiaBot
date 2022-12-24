const { SlashCommandBuilder } = require('discord.js');

const createEmbed = (question) => {
	const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Giveaway')
		.setDescription(question)
		.setTimestamp()
		.setFooter('Giveaway');
	return embed;
}

const createGiveaway = (channel) => {
	channel.send('Giveaway!');
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