import { ApplicationCommandTypes, CommandInteraction, type Client } from "oceanic.js";
import { botinfo, ping } from "../commands/modules";
import { type InteractionReply } from "../types/modules";

export class CommandHandler {
    private readonly client: Client;
    private commands: Map<string, InteractionReply>;

    constructor(client: Client) {
        this.client = client;
        this.commands = new Map();

        this.commands.set("ping", ping);
        this.commands.set("botinfo", botinfo);
    }

    async register() {
        this.client.once('ready', async() => {
            for(const [name, cmdObj] of this.commands.entries()) {
                this.client.application.createGlobalCommand({
                    name: cmdObj.name,
                    description: cmdObj.description,
                    type: ApplicationCommandTypes.CHAT_INPUT,
                    options: cmdObj.options
                });
            }
        });
    }

    async init() {
        this.client.on('interactionCreate', async(interaction) => {
            if(interaction instanceof CommandInteraction) {
                this.commands.get(interaction.data.name)?.command(interaction);
            }
        });
    }
}

