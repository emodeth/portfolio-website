import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1bqf3w1t",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
