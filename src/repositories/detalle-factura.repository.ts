import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {ConnAtlasDataSource} from '../datasources';
import {DetalleFactura, DetalleFacturaRelations, Factura, Productos} from '../models';
import {FacturaRepository} from './factura.repository';
import {ProductosRepository} from './productos.repository';

export class DetalleFacturaRepository extends DefaultCrudRepository<
  DetalleFactura,
  typeof DetalleFactura.prototype.id,
  DetalleFacturaRelations
> {

  public readonly factura: BelongsToAccessor<Factura, typeof DetalleFactura.prototype.id>;

  public readonly productos: BelongsToAccessor<Productos, typeof DetalleFactura.prototype.id>;

  constructor(
    @inject('datasources.connAtlas') dataSource: ConnAtlasDataSource, @repository.getter('FacturaRepository') protected facturaRepositoryGetter: Getter<FacturaRepository>, @repository.getter('ProductosRepository') protected productosRepositoryGetter: Getter<ProductosRepository>,
  ) {
    super(DetalleFactura, dataSource);
    this.productos = this.createBelongsToAccessorFor('productos', productosRepositoryGetter,);
    this.registerInclusionResolver('productos', this.productos.inclusionResolver);
    this.factura = this.createBelongsToAccessorFor('factura', facturaRepositoryGetter,);
    this.registerInclusionResolver('factura', this.factura.inclusionResolver);
  }
}
