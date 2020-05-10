import { schema } from 'normalizr';
import { EntityTypes } from './entity.types';

export const Entities: { [schemaName: string]: schema.Entity } = {};

Entities[EntityTypes.user] = new schema.Entity(
  EntityTypes.user,
  {},
  {
    idAttribute: 'ID',
  }
);
