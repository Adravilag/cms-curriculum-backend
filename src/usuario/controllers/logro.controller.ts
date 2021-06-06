import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { LogroService } from './../services/logro.service';
import { CreateLogroDTO } from "./../dto/logro.interface";

@Controller('logro')
export class LogroController {

    constructor(private logroService: LogroService) {}

    @Post('/create')
    async createLogro(@Res() res, @Body() createLogroDTO : CreateLogroDTO ) {        

        const logro = await this.logroService.createLogro(createLogroDTO);
        
        return res.status(HttpStatus.OK).json({
            msg: 'Logro Successfully Created.',
            logro
        });

    }

    @Get('/')
    async getLogros(@Res() res){

        const logros = await this.logroService.getLogros();

        return res.status(HttpStatus.OK).json({
            logros
        });

    }

    @Get('/:id')
    async getLogroById(@Res() res, @Param('id') id) {
        
        const logro = await this.logroService.getLogroById(id);

        if(!logro) throw new NotFoundException('Logro Does not exists.')

        return res.status(HttpStatus.OK).json({
            logro
        });

    }

    @Put('/update')
    async updateLogro(@Res() res, @Query('id') id, @Body() createLogro : CreateLogroDTO ) {

        const updatedLogro = await this.logroService.updateLogro(id, createLogro);

        if(!updatedLogro) throw new NotFoundException('Logro Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Logro Updated Succesfully",
            updatedLogro
        });

    }        

    @Delete('/delete')
    async deleteLogro(@Res() res, @Query('id') id) {

        const deletedLogro = await this.logroService.deleteLogro(id);

        if(!deletedLogro) throw new NotFoundException('Logro Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Logro Deleted Succesfully",
            deletedLogro
        });
    }


}