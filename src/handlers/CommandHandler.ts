import { CommandInteraction, type Client } from "oceanic.js";
import { ping } from "../commands/modules";

export class CommandHandler {
    private readonly client: Client;
    private commands: Array<(interaction: CommandInteraction) => Promise<void>>;

    constructor(client: Client) {
        this.client = client;
        this.commands = [ping];
    }

    async init() {
        this.client.on('interactionCreate', async(interaction) => {
            for(const command of this.commands) {
                try {
                    if(interaction instanceof CommandInteraction) {
                        if(interaction.data.name == command.name) {
                            command(interaction);
                        }
                    }
                } catch (err) {
                    if(interaction instanceof CommandInteraction) {
                        interaction.createMessage({ content: "Erro ao enviar a mensagem..." });
                    }
                }
            }
        });
    }
}