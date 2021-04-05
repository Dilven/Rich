import { NextApiRequest, NextApiResponse } from "next";
import { methodHandler } from "@helpers/method-handler";

const getHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(JSON.stringify({ message: 'hello' }));
};

export default methodHandler({ get: getHandler });
