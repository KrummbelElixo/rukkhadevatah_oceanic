import type { CommandInteraction } from "oceanic.js";

export async function ping(interaction: CommandInteraction) {
    interaction.createMessage({ content: "Eu dou a bunda" });
}