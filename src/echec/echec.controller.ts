import { Controller, Post, Body } from '@nestjs/common';
import {Echec} from './echec.models';
import { EchecService } from './echec.service';

@Controller('echec')
export class EchecController {

    constructor(private echecService: EchecService) { }

    @Post()

    postechec( 

        @Body('id') id: number,
        @Body('timeTakenMs') timeTakenMs: number,
        @Body('created_at') created_at: Date,) : Promise<Echec> {

        return this.echecService.postechec(id, timeTakenMs, created_at);
    }
}






