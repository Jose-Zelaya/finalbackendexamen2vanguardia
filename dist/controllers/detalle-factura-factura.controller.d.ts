import { DetalleFactura, Factura } from '../models';
import { DetalleFacturaRepository } from '../repositories';
export declare class DetalleFacturaFacturaController {
    detalleFacturaRepository: DetalleFacturaRepository;
    constructor(detalleFacturaRepository: DetalleFacturaRepository);
    getFactura(id: typeof DetalleFactura.prototype.id): Promise<Factura>;
}
