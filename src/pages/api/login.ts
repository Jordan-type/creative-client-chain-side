// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { signIn } from "next-auth/react";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
   const {email,password} = req.body

    const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
  console.log("result is result",result)
  return result;
   
}