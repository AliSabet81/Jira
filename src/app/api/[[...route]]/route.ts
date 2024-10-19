import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

// eslint-disable-next-line
const routes = app;

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
