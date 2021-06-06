import { Document } from "mongoose";

export interface Experiencia extends Document {
    puesto: string;
    empresa: string;
    ubicacion: string;
    fecha: string;
    descripcion: string;
    enlace: string;
}