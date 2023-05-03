import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Succes } from './succes.entity';


@Injectable()
export class SuccesService {

    constructor(

        @InjectRepository(Succes)
        private echecRepository: Repository<Succes>,
    ) { }


    async postsucces(id:number,timeTakenMs:number,created_at:Date) : Promise<Succes> {

        const succes = new Succes();
        succes.id = id;
        succes.timeTakenMs = timeTakenMs;
        succes.created_at = created_at;

        return succes;

    }


}
