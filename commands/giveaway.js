const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('giveaway')
		.setDescription('Create a giveaway!')
		.addStringOption(option => option.setName('text').setDescription('the text')),
	async execute(interaction) {
		const question = interaction.options.getString('text');
		const sender = interaction.user;
		return;
	},
};