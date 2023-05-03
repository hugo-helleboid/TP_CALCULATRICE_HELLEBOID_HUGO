import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuccesModule } from './succes/succes.module';
import { EchecModule } from './echec/echec.module';
import { Succes } from './succes/succes.entity';
import { SuccesController } from './succes/succes.controller';
import { EchecController } from './echec/echec.controller';
import { SuccesService } from './succes/succes.service';
import { EchecService } from './echec/echec.service';
import { Echec } from './echec/echec.entity';

@Module({
    imports: [TypeOrmModule.forRoot({

        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [Succes],
        synchronize: true,
    
    })],

    controllers: [SuccesController, EchecController],
    providers: [SuccesService,EchecService]
    
})
export class AppModule {}



