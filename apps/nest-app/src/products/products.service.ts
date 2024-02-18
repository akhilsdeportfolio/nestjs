/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prodcut } from './product.model';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { User } from 'apps/nest-app/src/entities/user/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Actor } from 'apps/nest-app/src/models/users.model';
import { UUID } from 'sequelize';

@Injectable()
export class ProductsService {
    products: Prodcut[] = [];

    constructor(@InjectModel(Actor) private userModel: typeof Actor) {

    }

    async insertProduct(title: string, description: string, price: number) {
        const product = new Prodcut(
            Math.floor(Math.random()),
            title,
            description,
        );

        console.log({ ...product })
        const resp = await this.userModel.create({ ...product, });
        return resp;
    }

    async getAllProducts(): Promise<Actor[]> {

        try {
            return this.userModel.findAll()
        }
        catch (e) {
            console.error("erroe", e);
        }

    }

    async getProduct(id): Promise<Actor> {
        return this.userModel.findOne({ where: { actor_id: id } })

    }

    async update(id, data): Promise<Actor> {
        return this.userModel.findOne({});
    }


}
