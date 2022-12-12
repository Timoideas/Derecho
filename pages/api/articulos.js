import database from "database/database";
import ValidateObject from "libraries/global/Validate";
import ArticulosSchema from "models/articulos.schema";

export default async function API(req, res) {
  const { method } = req;
  await database();
  switch (method) {
    case "GET":
      try {
        const articulos = await ArticulosSchema.find();
        res.status(200).json(articulos);
      } catch ({ message }) {
        res.status(400).json({ error: message });
      }
      break;
    case "POST":
      try {
        const body = await ValidateObject(req.body, ["articulos"]);
        const articulos = new ArticulosSchema(body);
        await articulos.save();
        res.status(200).json(articulos);
      } catch ({ message }) {
        res.status(400).json({ error: message });
      }
      break;
    case "PUT":
      try {
        const { _id } = req.body;
        const body = await ValidateObject(req.body, ["articulos"]);
        const articulos = await ArticulosSchema.findOneAndUpdate(
          { _id },
          body,
          { new: true }
        );
        res.status(200).json(articulos);
      } catch ({ message }) {
        res.status(400).json({ error: message });
      }
      break;
    case "DELETE":
      try {
        const { _id } = req.body;
        await ArticulosSchema.findOneAndDelete({ _id });
        res.status(200).json({ ok: true });
      } catch ({ message }) {
        res.status(400).json({ error: message });
      }
      break;
    default:
      res.status(405).json({
        message: "Method not allowed",
      });
      break;
  }
}
