import { Schema } from "mongoose";

export const RSSchema = new Schema({
    nombre: String,
    url: String,
    imgQr: String,
    imgLogo: String,
    usuario: {type: Schema.Types.ObjectId, required: true}
});