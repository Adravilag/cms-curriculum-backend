import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { PersonalService } from "./../services/personal.service";
import { CreatePersonalDTO } from './../dto/personal.interface';

@Controller('personal')
export class PersonalController {

    constructor(private personalService: PersonalService) {}

    @Post('/create')
    async createPersonal(@Res() res, @Body() createPersonalDTO : CreatePersonalDTO ) {    

        const personal = await this.personalService.createPersonal(createPersonalDTO);

        return res.status(HttpStatus.OK).json({
            msg: 'Personal Successfully Created.',
            personal
        });

    }

    @Get('/')
    async getPersonal(@Res() res){

        const personal = await this.personalService.getPersonal();

        return res.status(HttpStatus.OK).json({
            personal
        });

    }

    @Put('/update')
    async updatePersonal(@Res() res, @Query('id') id, @Body() createPersonalDTO: CreatePersonalDTO ) {

        const updatedPersonal = await this.personalService.updatePersonal(id, createPersonalDTO);

        if(!updatedPersonal) throw new NotFoundException('Personal Does not exists.')
        
        return res.status(HttpStatus.OK).json({
            msg: "Personal Updated Succesfully",
            updatedPersonal
        });

    }        

    @Delete('/delete')
    async deletePersonal(@Res() res, @Query('id') id) {

        const deletedPersonal = await this.personalService.deletePersonal(id);

        if(!deletedPersonal) throw new NotFoundException('Personal Does not exists.')

        return res.status(HttpStatus.OK).json({
            msg: "Personal Deleted Succesfully",
            deletedPersonal
        });
        
    }


}