import { Client } from 'oceanic.js';
import { EventHandler } from './handlers/EventHandler';
import { CommandHandler } from './handlers/CommandHandler';

export const client = new Client({ auth: `Bot ${process.env.TOKEN}` });

const commandHandler = new CommandHandler(client);

await commandHandler.register();

await commandHandler.init();

const eventHandler = new EventHandler(client);

await eventHandler.init();

await client.connect();