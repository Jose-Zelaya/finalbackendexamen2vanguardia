import { Count, Filter, Where } from '@loopback/repository';
import { Factura, DetalleFactura } from '../models';
import { FacturaRepository } from '../repositories';
export declare class FacturaDetalleFacturaController {
    protected facturaRepository: FacturaRepository;
    constructor(facturaRepository: FacturaRepository);
    find(id: string, filter?: Filter<DetalleFactura>): Promise<DetalleFactura[]>;
    create(id: typeof Factura.prototype.id, detalleFactura: Omit<DetalleFactura, 'id'>): Promise<DetalleFactura>;
    patch(id: string, detalleFactura: Partial<DetalleFactura>, where?: Where<DetalleFactura>): Promise<Count>;
    delete(id: string, where?: Where<DetalleFactura>): Promise<Count>;
}
