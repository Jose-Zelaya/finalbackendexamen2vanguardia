import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DetalleFactura } from '../models';
import { DetalleFacturaRepository } from '../repositories';
export declare class DetalleFacturaController {
    detalleFacturaRepository: DetalleFacturaRepository;
    constructor(detalleFacturaRepository: DetalleFacturaRepository);
    create(detalleFactura: Omit<DetalleFactura, 'id'>): Promise<DetalleFactura>;
    count(where?: Where<DetalleFactura>): Promise<Count>;
    find(filter?: Filter<DetalleFactura>): Promise<DetalleFactura[]>;
    updateAll(detalleFactura: DetalleFactura, where?: Where<DetalleFactura>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<DetalleFactura>): Promise<DetalleFactura>;
    updateById(id: string, detalleFactura: DetalleFactura): Promise<void>;
    replaceById(id: string, detalleFactura: DetalleFactura): Promise<void>;
    deleteById(id: string): Promise<void>;
}
