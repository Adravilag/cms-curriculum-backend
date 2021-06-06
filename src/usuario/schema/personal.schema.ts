import { Schema } from "mongoose";

export const PersonalSchema = new Schema({
    nombre: String,
    titulo: String,
    email: String,
    telefono: String,
    residencia: String,
    evatar: String,
    acerca_de: String,
    perfil: Array,
    informacion: Array,
    usuario: {type: Schema.Types.ObjectId, required: true, unique: true}
});