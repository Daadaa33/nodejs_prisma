import server from "./api/server.js";

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`listening on localhost:${PORT}`);
});