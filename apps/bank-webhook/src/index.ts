import express from "express";
import db from "@repo/db/client";
import { hdfcWebhookValidation } from "@repo/zodvalidation/hdfcWebhook";
import e from "express";

const app = express();

app.use(express.json());

app.post("/bankWebhook", async (req, res) => {
  console.log("hiiiii........................");
  const token = req.body.token;
  const userId = req.body.user_Identifier;
  const amount = req.body.amount;

  const { error } = hdfcWebhookValidation.safeParse({ token, userId, amount });
  if (error) {
    return res.status(400).json({
      message: "Please fill input correctly",
    });
  }

  try {
    await db.balance.updateMany({
      where: {
        userId: Number(userId),
      },
      data: {
        amount: {
          increment: Number(amount),
        },
      },
    });

    await db.onRampTransaction.updateMany({
      where: {
        token: token,
      },
      data: {
        status: "Success",
      },
    });
    res.status(200).json({
      message: "Captured",
    });
  } catch (error) {
    console.error(e);
    res.status(411).json({
      message: "Error while processing webhook",
    });
  }
});

app.listen(3003, () => {
  console.log("Listning on port 3003");
});
