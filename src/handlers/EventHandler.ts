import type { Client } from "oceanic.js";
import { onReady, onError } from "../events/modules";

export class EventHandler {
    private readonly client: Client;
    private events: Array<(client: Client) => Promise<void>>;

    constructor(client: Client) {
        this.client = client;
        this.events = [onReady, onError];
    }

    async init() {
        for(const event of this.events) {
            await event(this.client);
        }
    }
}