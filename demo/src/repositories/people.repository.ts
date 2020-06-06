import {DefaultCrudRepository} from '@loopback/repository';
import {People, PeopleRelations} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PeopleRepository extends DefaultCrudRepository<
  People,
  typeof People.prototype.id,
  PeopleRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(People, dataSource);
  }
}
