import { Document } from "mongoose";

export interface Personal extends Document {
    nombre: string;
    titulo: string;
    email: string;
    telefono: string;
    residencia: string;
    acerca_de?: string;
    perfil?: string[];
    informacion?: string[];
}