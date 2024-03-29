import multiparty from "multiparty";
import { mongooseConnect } from "../../lib/mongoose";
import { isAdminRequest } from "./auth/[...nextauth]";

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest();
  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  return res.json("ok");
}

export const config = {
  api: {
    bodyParser: false,
  },
};

// export const config = {
//   api: {
//     bodyParser: {
//       json: { limit: '10mb', extended: true }
//     },
//   },
// };

// export const config = {
//   api: {
//     bodyParser: {
//       json: { limit: "50mb", extended: true },
//       urlencoded: { limit: "50mb", extended: true },
//     },
//   },
// };
