import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Productos } from '../models';
import { ProductosRepository } from '../repositories';
export declare class ProductosController {
    productosRepository: ProductosRepository;
    constructor(productosRepository: ProductosRepository);
    create(productos: Omit<Productos, 'id'>): Promise<Productos>;
    count(where?: Where<Productos>): Promise<Count>;
    find(filter?: Filter<Productos>): Promise<Productos[]>;
    updateAll(productos: Productos, where?: Where<Productos>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Productos>): Promise<Productos>;
    updateById(id: string, productos: Productos): Promise<void>;
    replaceById(id: string, productos: Productos): Promise<void>;
    deleteById(id: string): Promise<void>;
}
