import type { CommandInteraction } from "oceanic.js";
import type { InteractionReply } from "../types/modules";

export const ping: InteractionReply = {
    name: "ping",
    description: "Veja o ping do bot",
    command: async (interaction: CommandInteraction) => {
        const startTime = Date.now();

        await interaction.reply({ content: "Calculando o ping..." });

        const endTime = Date.now();
        const time = endTime - startTime;
        
        await interaction.editOriginal({ content: `O ping é de ${time}` });
    }
}