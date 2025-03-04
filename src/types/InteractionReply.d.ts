import type { CommandInteraction } from "oceanic.js";
import type { ReplyOption } from "./ReplyOption";

export interface InteractionReply {
    name: string;
    description: string;
    options?: ReplyOption[];
    command: (interaction: CommandInteraction) => Promise<void>;  
}

