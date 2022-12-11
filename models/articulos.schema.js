import { Schema, model, models } from 'mongoose';
import validator from 'mongoose-unique-validator';
const ArticulosSchema = new Schema({
	articulos: { type: String },
});
ArticulosSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default models.Articulos || model('Articulos', ArticulosSchema);

