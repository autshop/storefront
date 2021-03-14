require("dotenv").config();
import next from "next";
import express from "express";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
    await app.prepare();

    const server = express();
    server.get("*", (req, res) => handle(req, res));

    const port = process.env.SERVER_PORT || 3000;
    await server.listen(port);
    console.log("Server is listening on port", port);
})();
