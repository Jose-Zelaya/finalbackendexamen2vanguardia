import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { ConnAtlasDataSource } from '../datasources';
import { DetalleFactura, DetalleFacturaRelations, Factura, Productos } from '../models';
import { FacturaRepository } from './factura.repository';
import { ProductosRepository } from './productos.repository';
export declare class DetalleFacturaRepository extends DefaultCrudRepository<DetalleFactura, typeof DetalleFactura.prototype.id, DetalleFacturaRelations> {
    protected facturaRepositoryGetter: Getter<FacturaRepository>;
    protected productosRepositoryGetter: Getter<ProductosRepository>;
    readonly factura: BelongsToAccessor<Factura, typeof DetalleFactura.prototype.id>;
    readonly productos: BelongsToAccessor<Productos, typeof DetalleFactura.prototype.id>;
    constructor(dataSource: ConnAtlasDataSource, facturaRepositoryGetter: Getter<FacturaRepository>, productosRepositoryGetter: Getter<ProductosRepository>);
}
