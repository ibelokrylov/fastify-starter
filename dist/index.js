"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
require("dotenv/config");
var FASTIFY_PORT = Number(process.env.FASTIFY_PORT) || 3006;
app_1.app.listen({ port: FASTIFY_PORT });
console.log("\uD83D\uDE80  Fastify server running on port http://localhost:".concat(FASTIFY_PORT));
