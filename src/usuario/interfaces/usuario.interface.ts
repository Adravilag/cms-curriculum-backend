import { Document } from "mongoose";
import { Logro } from "./logro.interface";
import { Educacion } from "./educacion.interface";
import { Experiencia } from "./experiencia.interface";
import { Personal } from "./personal.interface";
import { Tecnologia } from "./tecnologia.interface";
import { RS } from "./rs.interface";

export interface Usuario extends Document {
    email: string;
    password: string; 
    personal?: Personal;
    educacion?: Educacion[];
    experiencia?: Experiencia[];
    logros?: Logro[];
    tecnologias?: Tecnologia[];
    rs?: RS[];
}