import { Injectable } from '@nestjs/common';
import { CreateTecnologiaDTO } from "../dto/tecnologia.interface";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tecnologia } from '../interfaces/tecnologia.interface';

@Injectable()
export class TecnologiaService {

    constructor(@InjectModel('Tecnologia') private readonly TecnologiasModel : Model<Tecnologia>) {}

    async getTecnologias() : Promise<Tecnologia[]> {        
        return await this.TecnologiasModel.find();
    }

    async getTecnologiaById(id : string) : Promise<Tecnologia> {
        return await this.TecnologiasModel.findById(id);
    }

    async createTecnologia(createTecnologiaDTO : CreateTecnologiaDTO) : Promise<Tecnologia> {
        return await new this.TecnologiasModel(createTecnologiaDTO).save();
    }

    async updateTecnologia(id : string, createTecnologiaDTO : CreateTecnologiaDTO) : Promise<Tecnologia> {
         return await this.TecnologiasModel.findByIdAndUpdate(id, createTecnologiaDTO, { new: true });
    }

    async deleteTecnologia(id: string) : Promise<Tecnologia> {
        return await this.TecnologiasModel.findByIdAndRemove(id);
    }

}