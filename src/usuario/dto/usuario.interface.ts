import { CreatePersonalDTO } from "./personal.interface";
import { CreateRSDTO } from "./rs.interface";
import { CreateLogroDTO } from "./logro.interface";
import { CreateEducacionDTO } from "./educacion.interface";
import { CreateExperienciaDTO } from "./Experiencia.interface";
import { CreateTecnologiaDTO } from "./tecnologia.interface";

export class CreateUsuarioDTO {
    email: string;
    password: string;
    personal?: CreatePersonalDTO;
    educacion?: CreateEducacionDTO[];
    experiencia?: CreateExperienciaDTO[];
    logros?: CreateLogroDTO[];
    tecnologias?: CreateTecnologiaDTO[];
    rs: CreateRSDTO[];
}