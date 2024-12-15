import { env } from "@/env/env";
import axios from "axios";

export const api = axios.create({
  baseURL: `http://${env.IP_ADDRESS}:${env.API_PORT}`,
  timeout: 700,
});
