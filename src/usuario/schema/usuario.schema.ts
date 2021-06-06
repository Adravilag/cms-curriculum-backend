import { Schema } from "mongoose";

export const UsuarioSchema = new Schema({
    email: String,
    password: String,
    personal: {type: Schema.Types.ObjectId},
    experiencia: {type: Schema.Types.ObjectId},
    educacion: {type: Schema.Types.ObjectId},
    logro: {type: Schema.Types.ObjectId},
    tecnologia: {type: Schema.Types.ObjectId},
});