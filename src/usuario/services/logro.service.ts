import { Injectable } from '@nestjs/common';
import { CreateLogroDTO } from "../dto/logro.interface";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Logro } from '../interfaces/logro.interface';

@Injectable()
export class LogroService {

    constructor(@InjectModel('Logro') private readonly logrosModel : Model<Logro>) {}

    async getLogros() : Promise<Logro[]> {        
        return await this.logrosModel.find();
    }

    async getLogroById(id : string) : Promise<Logro> {
        return await this.logrosModel.findById(id);
    }

    async createLogro(createLogroDTO : CreateLogroDTO) : Promise<Logro> {
        return await new this.logrosModel(createLogroDTO).save();
    }

    async updateLogro(id : string, createLogroDTO : CreateLogroDTO) : Promise<Logro> {
         return await this.logrosModel.findByIdAndUpdate(id, createLogroDTO, { new: true });
    }

    async deleteLogro(id: string) : Promise<Logro> {
        return await this.logrosModel.findByIdAndRemove(id);
    }

}