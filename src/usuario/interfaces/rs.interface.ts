import { Document } from "mongoose";

export interface RS extends Document {
    nombre: string;
    url: string;
    imgQr: string;
    imgLogo: string;
}