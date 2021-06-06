import { Schema } from "mongoose";

export const LogroSchema = new Schema({
    titulo: String,
    empresa: String,
    ubicacion: String,
    fecha: String,
    descripcion: String,
    enlace: String,
    usuario: {type: Schema.Types.ObjectId, required: true}
});