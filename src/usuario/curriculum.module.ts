import { Module } from '@nestjs/common';
import { EducacionService } from "./services/educacion.service";
import { EducacionController } from "./controllers/educacion.controller";
import { PersonalSchema } from "./schema/personal.schema";
import { PersonalService } from "./services/personal.service";
import { PersonalController } from "./controllers/personal.controller";
import { UsuarioController } from "./controllers/usuario.controller";
import { MongooseModule } from '@nestjs/mongoose';

import { UsuarioSchema } from './schema/usuario.schema';
import { UsuarioService } from './services/usuario.service';
import { EducacionSchema } from './schema/educacion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
        {name: 'Usuario', schema: UsuarioSchema},
        {name: 'Personal', schema: PersonalSchema},
        {name: 'Educacion', schema: EducacionSchema},
    ])
  ],
  controllers: [
    UsuarioController,
    PersonalController,
    EducacionController,
  ],
  providers: [
    UsuarioService,
    PersonalService,
    EducacionService
  ]
})
export class CurriculumModule {}
