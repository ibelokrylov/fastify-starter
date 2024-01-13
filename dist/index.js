import { fastify } from 'fastify';
const Port = process.env.PORT || 5001;
const server = fastify({
    logger: true,
});
const start = async () => {
    try {
        await server.listen(Port);
        console.log('Server started successfully');
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
//# sourceMappingURL=index.js.map