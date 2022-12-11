import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {ConnAtlasDataSource} from '../datasources';
import {Productos, ProductosRelations, DetalleFactura} from '../models';
import {DetalleFacturaRepository} from './detalle-factura.repository';

export class ProductosRepository extends DefaultCrudRepository<
  Productos,
  typeof Productos.prototype.id,
  ProductosRelations
> {

  public readonly detallefacturas2: HasManyRepositoryFactory<DetalleFactura, typeof Productos.prototype.id>;

  constructor(
    @inject('datasources.connAtlas') dataSource: ConnAtlasDataSource, @repository.getter('DetalleFacturaRepository') protected detalleFacturaRepositoryGetter: Getter<DetalleFacturaRepository>,
  ) {
    super(Productos, dataSource);
    this.detallefacturas2 = this.createHasManyRepositoryFactoryFor('detallefacturas2', detalleFacturaRepositoryGetter,);
    this.registerInclusionResolver('detallefacturas2', this.detallefacturas2.inclusionResolver);
  }
}
