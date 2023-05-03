import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Echec } from './echec.entity';


@Injectable()
export class EchecService {

    constructor(

    @InjectRepository(Echec)
    private echecRepository: Repository<Echec>,
    ) {}


    async postechec(id: number, timeTakenMs: number, created_at: Date): Promise<Echec> {

        const echec = new Echec();
        echec.id = id;
        echec.timeTakenMs = timeTakenMs;
        echec.created_at = created_at;

        return echec;

    }



}
