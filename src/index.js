import app from "./app.js";
import { PORT } from "./config.js";
import middlewares from "../src/middlewares.js";

middlewares(app);

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});import app from "./app.js";
import middlewares from "./middlewares.js";
import handlebars from "express-handlebars";
import config from "./config.js";
import http from "http";
import { PORT } from "./config.js";
import { SocketIo } from "./sockets.js";
import { Server as ServerWebSocket } from "socket.io";
/* Initialization  Http Server*/
const httpserver = http.createServer(app);

/* Engine Template */
app.engine("handlebars", handlebars.engine());

/* MiddleWares */
middlewares(app);

/* Sockets */
export const io = new ServerWebSocket(httpserver);
SocketIo(io);
/* Config */
config(app);

/* Server Listen */
httpserver.listen(PORT);
console.log("Server listening on port", +PORT);