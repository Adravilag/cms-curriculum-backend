import { Injectable } from '@nestjs/common';
import { CreateUsuarioDTO } from "../dto/Usuario.interface";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from '../interfaces/Usuario.interface';

@Injectable()
export class UsuarioService {

    constructor(@InjectModel('Usuario') private readonly usuariosModel : Model<Usuario>) {}

    async getUsuarios() : Promise<Usuario[]> {        
        return await this.usuariosModel.find();
    }

    async getUsuarioById(id : string) : Promise<Usuario> {
        return await this.usuariosModel.findById(id);
    }

    async createUsuario(createUsuarioDTO : CreateUsuarioDTO) : Promise<Usuario> {
        return await new this.usuariosModel(createUsuarioDTO).save();
    }

    async updateUsuario(id : string, createUsuarioDTO : CreateUsuarioDTO) : Promise<Usuario> {
        console.log(createUsuarioDTO);
    
         return await this.usuariosModel.findByIdAndUpdate(id, {$set: createUsuarioDTO}, { new: true });
    }

    async deleteUsuario(id: string) : Promise<Usuario> {
        return await this.usuariosModel.findByIdAndRemove(id);
    }

}