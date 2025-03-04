import type { CommandInteraction } from "oceanic.js";
import type { InteractionReply } from "../types/modules";

export const say: InteractionReply = {
    name: "say",
    description: "Faça o bot falar algo...",
    options: [
        {
            type: 3,
            name: "content",
            description: "Bot will say...?",
            required: true
        }
    ],
    command: async(interaction: CommandInteraction) => {
        const message = interaction.data.options;

        message.getString;
    }
}
