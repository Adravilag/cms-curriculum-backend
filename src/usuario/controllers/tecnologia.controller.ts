import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreateTecnologiaDTO } from "./../dto/tecnologia.interface";
import { TecnologiaService } from './../services/tecnologia.service';

@Controller('tecnologia')
export class TecnologiaController {

    constructor(private tecnologiaService: TecnologiaService) {}

    @Post('/create')
    async createTecnologia(@Res() res, @Body() createTecnologiaDTO : CreateTecnologiaDTO ) {        

        const tecnologia = await this.tecnologiaService.createTecnologia(createTecnologiaDTO);
        
        return res.status(HttpStatus.OK).json({
            msg: 'Tecnologia Successfully Created.',
            tecnologia
        });

    }

    @Get('/')
    async getTecnologias(@Res() res){

        const Tecnologias = await this.tecnologiaService.getTecnologias();

        return res.status(HttpStatus.OK).json({
            Tecnologias
        });

    }

    @Get('/:id')
    async getTecnologiaById(@Res() res, @Param('id') id) {
        
        const tecnologia = await this.tecnologiaService.getTecnologiaById(id);

        if(!tecnologia) throw new NotFoundException('Tecnologia Does not exists.')

        return res.status(HttpStatus.OK).json({
            tecnologia
        });

    }

    @Put('/update')
    async updateTecnologia(@Res() res, @Query('id') id, @Body() createTecnologia : CreateTecnologiaDTO ) {

        const updatedTecnologia = await this.tecnologiaService.updateTecnologia(id, createTecnologia);

        if(!updatedTecnologia) throw new NotFoundException('Tecnologia Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Tecnologia Updated Succesfully",
            updatedTecnologia
        });

    }        

    @Delete('/delete')
    async deleteTecnologia(@Res() res, @Query('id') id) {

        const deletedTecnologia = await this.tecnologiaService.deleteTecnologia(id);

        if(!deletedTecnologia) throw new NotFoundException('Tecnologia Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Tecnologia Deleted Succesfully",
            deletedTecnologia
        });
    }


}