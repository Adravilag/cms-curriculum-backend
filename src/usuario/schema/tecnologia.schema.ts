import { Schema } from "mongoose";

export const TecnologiaSchema = new Schema({
    nombre: String,
    estrellas: Number,
    status: String,
    usuario: {type: Schema.Types.ObjectId, required: true}
});