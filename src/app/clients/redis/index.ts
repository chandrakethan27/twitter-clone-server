import  Redis  from "ioredis";

export const redisClient = new Redis(process.env.REDDIS_URL as string)