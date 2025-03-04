import { CommandInteraction, Interaction, MessageFlags } from "oceanic.js";
import type { InteractionReply } from "../types/modules";

export const botinfo: InteractionReply = {
    name: "botinfo",
    description: "veja as informações do bot",
    command: async (interaction: CommandInteraction) => {

        const uptime = new Date(interaction.client.uptime);

        const teste = uptime.toUTCString;

        await interaction.reply({ content: `${teste}`, flags: MessageFlags.EPHEMERAL });
    }
}