/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Prodcut } from './product.model';

@Injectable()
export class ProductsService {
    products: Prodcut[] = [];

    insertProduct(title: string, description: string, price: number) {
        const product = new Prodcut(
            new Date().toISOString(),
            title,
            description,
            price);
        this.products.push(product)
        return product;
    }

    getAllProducts(): Prodcut[] {
        return [...this.products];
    }
    getProduct(id: string) {
        const prod = this.products.find((product) => product.id === id)
        if (!prod) {
            throw new NotFoundException('product not found')
        }

        return { ...prod };
    }

    update(id: string, data: Prodcut) {
        const prodIndex = this.products.findIndex((product) => product.id === id)
        const prod = this.products[prodIndex];
        if (!prod) {
            throw new NotFoundException('product not found')
        }

        this.products[prodIndex] = data;


        return { ...this.products[prodIndex] }
    }
}
