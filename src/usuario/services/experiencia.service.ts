import { Injectable } from '@nestjs/common';
import { CreateExperienciaDTO } from "../dto/Experiencia.interface";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Experiencia } from '../interfaces/experiencia.interface';

@Injectable()
export class ExperienciaService {

    constructor(@InjectModel('Experiencia') private readonly experienciaModel : Model<Experiencia>) {}

    async getExperiencias() : Promise<Experiencia[]> {        
        return await this.experienciaModel.find();
    }

    async getExperienciaById(id : string) : Promise<Experiencia> {
        return await this.experienciaModel.findById(id);
    }

    async createExperiencia(createExperienciaDTO : CreateExperienciaDTO) : Promise<Experiencia> {
        return await new this.experienciaModel(createExperienciaDTO).save();
    }

    async updateExperiencia(id : string, createExperienciaDTO : CreateExperienciaDTO) : Promise<Experiencia> {
         return await this.experienciaModel.findByIdAndUpdate(id, createExperienciaDTO, { new: true });
    }

    async deleteExperiencia(id: string) : Promise<Experiencia> {
        return await this.experienciaModel.findByIdAndRemove(id);
    }

}