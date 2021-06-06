import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateUsuarioDTO } from "../dto/Usuario.interface";
import { UsuarioService } from '../services/usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}

    @Post('/create')
    async createUsuario(@Res() res, @Body() createUsuarioDTO : CreateUsuarioDTO ) {        

        const usuario = await this.usuarioService.createUsuario(createUsuarioDTO);
        
        return res.status(HttpStatus.OK).json({
            msg: 'Usuario Successfully Created.',
            usuario
        });

    }

    @Get('/')
    async getUsuarios(@Res() res){

        const usuarios = await this.usuarioService.getUsuarios();

        return res.status(HttpStatus.OK).json({
            usuarios
        });

    }

    @Get('/:id')
    async getUsuarioById(@Res() res, @Param('id') id) {
        
        const usuario = await this.usuarioService.getUsuarioById(id);

        if(!usuario) throw new NotFoundException('Usuario Does not exists.')

        return res.status(HttpStatus.OK).json({
            usuario
        });

    }

    @Put('/update')
    async updateUsuario(@Res() res, @Query('id') id, @Body() createUsuario : CreateUsuarioDTO ) {

        const updatedUsuario = await this.usuarioService.updateUsuario(id, createUsuario);

        if(!updatedUsuario) throw new NotFoundException('Usuario Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Usuario Updated Succesfully",
            updatedUsuario
        });

    }        

    @Delete('/delete')
    async deleteUsuario(@Res() res, @Query('id') id) {

        const deletedUsuario = await this.usuarioService.deleteUsuario(id);

        if(!deletedUsuario) throw new NotFoundException('Usuario Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Usuario Deleted Succesfully",
            deletedUsuario
        });
    }


}