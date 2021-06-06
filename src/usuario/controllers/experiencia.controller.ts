import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { ExperienciaService } from '../services/experiencia.service';
import { CreateExperienciaDTO } from "./../dto/Experiencia.interface";

@Controller('experiencia')
export class ExperienciaController {

    constructor(private experienciaService: ExperienciaService) {}

    @Post('/create')
    async createExperiencia(@Res() res, @Body() createExperienciaDTO : CreateExperienciaDTO ) {        

        const experiencia = await this.experienciaService.createExperiencia(createExperienciaDTO);
        
        return res.status(HttpStatus.OK).json({
            msg: 'Experiencia Successfully Created.',
            experiencia
        });

    }

    @Get('/')
    async getExperiencias(@Res() res){

        const experiencias = await this.experienciaService.getExperiencias();

        return res.status(HttpStatus.OK).json({
            experiencias
        });

    }

    @Get('/:id')
    async getExperienciaById(@Res() res, @Param('id') id) {
        
        const experiencia = await this.experienciaService.getExperienciaById(id);

        if(!experiencia) throw new NotFoundException('Experiencia Does not exists.')

        return res.status(HttpStatus.OK).json({
            experiencia
        });

    }

    @Put('/update')
    async updateExperiencia(@Res() res, @Query('id') id, @Body() createExperiencia : CreateExperienciaDTO ) {

        const updatedExperiencia = await this.experienciaService.updateExperiencia(id, createExperiencia);

        if(!updatedExperiencia) throw new NotFoundException('Experiencia Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Experiencia Updated Succesfully",
            updatedExperiencia
        });

    }        

    @Delete('/delete')
    async deleteExperiencia(@Res() res, @Query('id') id) {

        const deletedExperiencia = await this.experienciaService.deleteExperiencia(id);

        if(!deletedExperiencia) throw new NotFoundException('Experiencia Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Experiencia Deleted Succesfully",
            deletedExperiencia
        });
    }


}