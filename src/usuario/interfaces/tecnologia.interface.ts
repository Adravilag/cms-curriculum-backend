import { Document } from "mongoose";

export interface Tecnologia extends Document {
    nombre: string;
    estrellas: number;
    estado: string;
}