import { ButtonInteraction } from 'discord.js';
import { ExtendedClient } from '@/types/extendedClient';

export default {
  customId: 'example',
  async execute(
    client: ExtendedClient,
    interaction: ButtonInteraction,
  ):Promise<void> {
    await interaction.reply({
      content: 'You clicked the button!',
      flags: 'Ephemeral',
    });
  },
};
