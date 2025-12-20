import "dotenv/config";
import express from "express";
import routes from "./routes/routes";
import cors from "cors";
import { WebSocketServer } from "ws";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});

const wss = new WebSocketServer({ port: 8080 }, () => {
  console.log("WS server running on wss://localhost:8080");
});

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        const message = JSON.parse(data.toString());
        if (message.type === "message")
          client.send(`${message.payload.sender} sent: ${message.payload.msg}`);
      }
    });
    // ws.send(`You sent: ${message}`);
  });
});
