import { Injectable } from '@nestjs/common';
import { CreatePersonalDTO } from "../dto/personal.interface";
import { Personal } from '../interfaces/personal.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PersonalService {

    constructor(@InjectModel('Personal') private readonly personalModel : Model<Personal>) {}

    async getPersonal() : Promise<Personal[]> {        
        return await this.personalModel.find();
    }

    async createPersonal(createPersonaDTO : CreatePersonalDTO) : Promise<Personal> {
        return await new this.personalModel(createPersonaDTO).save();
    }

    async updatePersonal(id : string, createPersonaDTO : CreatePersonalDTO) : Promise<Personal> {
         return await this.personalModel.findByIdAndUpdate(id, createPersonaDTO, { new: true });
    }

    async deletePersonal(id: string) : Promise<Personal> {
        return await this.personalModel.findByIdAndRemove(id);
    }

}