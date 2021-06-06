import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateEducacionDTO } from "./../dto/educacion.interface";
import { EducacionService } from './../services/educacion.service';

@Controller('educacion')
export class EducacionController {

    constructor(private educacionService: EducacionService) {}

    @Post('/create')
    async createEducacion(@Res() res, @Body() createEducacionDTO : CreateEducacionDTO ) {        

        const educacion = await this.educacionService.createEducacion(createEducacionDTO);
        
        return res.status(HttpStatus.OK).json({
            msg: 'Education Successfully Created.',
            educacion
        });

    }

    @Get('/')
    async getEducacion(@Res() res){

        const educacion = await this.educacionService.getEducacion();

        return res.status(HttpStatus.OK).json({
            educacion
        });

    }

    @Get('/:id')
    async getEducacionById(@Res() res, @Param('id') id) {
        
        const educacion = await this.educacionService.getEducacionById(id);

        if(!educacion) throw new NotFoundException('Education Does not exists.')

        return res.status(HttpStatus.OK).json({
            educacion
        });

    }

    @Put('/update')
    async updateEducacion(@Res() res, @Query('id') id, @Body() createEducacion : CreateEducacionDTO ) {

        const updatedEducacion = await this.educacionService.updateEducacion(id, createEducacion);

        if(!updatedEducacion) throw new NotFoundException('Education Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Education Updated Succesfully",
            updatedEducacion
        });

    }        

    @Delete('/delete')
    async deleteEducacion(@Res() res, @Query('id') id) {

        const deletedEducacion = await this.educacionService.deleteEducacion(id);

        if(!deletedEducacion) throw new NotFoundException('Education Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Education Deleted Succesfully",
            deletedEducacion
        });
        
    }


}