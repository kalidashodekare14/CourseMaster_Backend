import dotenv from 'dotenv';
dotenv.config();

type envType = {
    db_url: string,
    port: number,
    jwt_secret: string
}

export const config: envType = {
    db_url: process.env.DB_URL || "",
    port: Number(process.env.PORT) || 5000,
    jwt_secret: process.env.JWT_SECRET || ""
}

