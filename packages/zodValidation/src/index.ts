import z from "zod";

export const hdfcWebhookValidation = z.object({
  token: z.string(),
  userId: z.string(),
  amount: z.number(),
});
