import multiparty from "multiparty";

export default async function handle(req, res) {
  //const options = (formidable.Options = {});
  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  //console.dir(files ,{depth:5});
  return res.json("ok");
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Set desired value here
    }
  },
};
