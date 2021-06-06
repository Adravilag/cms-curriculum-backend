import { Schema } from "mongoose";

export const RRSSSchema = new Schema({
    nombre: String,
    url: String,
    img_qr: String,
    img_logo: String
});