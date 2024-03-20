import { createClient } from 'redis';

let redisClient:any;

(async () => {
    redisClient = createClient({
        socket: {
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
        }
  });

  redisClient.on("error", (error:any) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();


export default redisClient;
