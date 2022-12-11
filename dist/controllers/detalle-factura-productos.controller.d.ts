import { DetalleFactura, Productos } from '../models';
import { DetalleFacturaRepository } from '../repositories';
export declare class DetalleFacturaProductosController {
    detalleFacturaRepository: DetalleFacturaRepository;
    constructor(detalleFacturaRepository: DetalleFacturaRepository);
    getProductos(id: typeof DetalleFactura.prototype.id): Promise<Productos>;
}
