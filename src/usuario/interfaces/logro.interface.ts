import { Document } from "mongoose";

export interface Logro extends Document {
    titulo: string;
    ubicacion: string;
    empresa: string;
    fecha: string;
    descripcion: string;
    enlace: string;
}