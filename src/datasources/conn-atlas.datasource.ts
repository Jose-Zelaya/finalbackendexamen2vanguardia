import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'connAtlas',
  connector: 'mongodb',
  url: 'mongodb+srv://lizandro:Barahona123@cluster0.msdpd4r.mongodb.net/examen2',
  host: 'cluster0.msdp4r.mongodb.net',
  port: 27017,
  user: 'lizandro',
  password: 'Barahona123',
  database: 'examen2',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConnAtlasDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'connAtlas';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.connAtlas', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
