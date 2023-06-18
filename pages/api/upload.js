import multiparty from "multiparty";
//import formidable from "formidable";
//import path from "path";
//import fs from "fs";

export default async function handle(req, res) {
  //const options = (formidable.Options = {});
  const form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
  // const form = formidable(options);
  // const { fields, files } = await new Promise((resolve, reject) => {
  //   form.parse(req, (err, fields, files) => {
  //     if (err) reject(err);
  //     resolve({ fields, files });
  //   });
  // });
  // const file = files.file;
  // const oldPath = file.path;
  // const newPath = path.join(process.cwd(), "/public/images", file.name);

  // fs.rename(oldPath, newPath, (err) => {
  //   if (err) {
  //     console.error(err);
  //     res.status(500).send("Internal Server Error");
  //     return;
  //   }

  //   res.status(200).send("File uploaded successfully");
  // });

  //console.dir(files ,{depth:5});
  return res.json("ok");
}

export const config = {
  api: { bodyParser: false },
};
