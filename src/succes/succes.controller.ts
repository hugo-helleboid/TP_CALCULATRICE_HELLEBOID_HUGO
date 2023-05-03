import { Controller, Post, Body } from '@nestjs/common';
import { Succes } from './succes.models';
import { SuccesService } from './succes.service';

@Controller('succes')
export class SuccesController {

    constructor(private succesService: SuccesService) { }

    @Post()

    postsucces(

        @Body('id') id: number,
        @Body('timeTakenMs') timeTakenMs: number,
        @Body('created_at') created_at: Date,): Promise<Succes> {

        return this.succesService.postsucces(id, timeTakenMs, created_at);
    }
}