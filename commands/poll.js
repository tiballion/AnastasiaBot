const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('Create a poll!')
		.addStringOption(option => option.setName('question').setDescription('The poll question')),
	async execute(interaction) {
		const question = interaction.options.getString('question');
		const sender = interaction.user;
		return;
	},
};