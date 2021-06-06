import { Document } from "mongoose";

export interface Educacion extends Document {
    titulo: string;
    centro: string;
    ubicacion: string;
    descripcion: string;
    descripcion_practicas: string;
    fecha: string;
}