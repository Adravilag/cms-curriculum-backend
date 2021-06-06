import { Schema } from "mongoose";

export const EducacionSchema = new Schema({
    titulo: String,
    centro: String,
    ubicacion: String,
    descripcion: String,
    descripcion_practicas: String,
    fecha: String,
    usuario: {type: Schema.Types.ObjectId, required: true}
});