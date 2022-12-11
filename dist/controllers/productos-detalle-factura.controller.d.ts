import { Count, Filter, Where } from '@loopback/repository';
import { Productos, DetalleFactura } from '../models';
import { ProductosRepository } from '../repositories';
export declare class ProductosDetalleFacturaController {
    protected productosRepository: ProductosRepository;
    constructor(productosRepository: ProductosRepository);
    find(id: string, filter?: Filter<DetalleFactura>): Promise<DetalleFactura[]>;
    create(id: typeof Productos.prototype.id, detalleFactura: Omit<DetalleFactura, 'id'>): Promise<DetalleFactura>;
    patch(id: string, detalleFactura: Partial<DetalleFactura>, where?: Where<DetalleFactura>): Promise<Count>;
    delete(id: string, where?: Where<DetalleFactura>): Promise<Count>;
}
