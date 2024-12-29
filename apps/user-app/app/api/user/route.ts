import { getServerSession } from "next-auth";

import { authOption } from "../../lib/auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getServerSession(authOption);
  if (session.user) {
    return NextResponse.json({
      user: session.user,
    });
  }
  return NextResponse.json(
    {
      message: "You are not logged In",
    },
    {
      status: 403,
    }
  );
};
