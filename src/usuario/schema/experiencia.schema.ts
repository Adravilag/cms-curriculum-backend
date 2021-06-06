import { Schema } from "mongoose";

export const ExperienciaSchema = new Schema({
    puesto: String,
    empresa: String,
    ubicacion: String,
    fecha: String,
    descripcion: String,
    enlace: String,
    usuario: {type: Schema.Types.ObjectId, required: true}
});