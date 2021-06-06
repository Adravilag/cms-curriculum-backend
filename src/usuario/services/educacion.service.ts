import { Injectable } from '@nestjs/common';
import { CreateEducacionDTO } from "../dto/educacion.interface";
import { Educacion } from "./../interfaces/educacion.interface";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EducacionService {

    constructor(@InjectModel('Educacion') private readonly educacionModel : Model<Educacion>) {}

    async getEducacion() : Promise<Educacion[]> {        
        return await this.educacionModel.find();
    }

    async getEducacionById(id : string) : Promise<Educacion> {
        return await this.educacionModel.findById(id);
    }

    async createEducacion(createEducation : CreateEducacionDTO) : Promise<Educacion> {
        return await new this.educacionModel(createEducation).save();
    }

    async updateEducacion(id : string, createEducacionDTO : CreateEducacionDTO) : Promise<Educacion> {
         return await this.educacionModel.findByIdAndUpdate(id, createEducacionDTO, { new: true });
    }

    async deleteEducacion(id: string) : Promise<Educacion> {
        return await this.educacionModel.findByIdAndRemove(id);
    }

}