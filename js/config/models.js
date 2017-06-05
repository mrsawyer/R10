import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: {type: 'date', optional: true} ,
  }
};

const realm  = new Realm({schema: [Fave]});

export const queryFaves = () => {
  let faves = realm.objects('Fave').map(fave => fave.id);
  return faves;
}

export const createFave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', {id: faveId, faved_on: new Date});
  });
}

export const deleteFave = (faveId) => {
  let faves = realm.objects('Fave');
  let fave = faves.filtered('id == $0', faveId);
  realm.write(() => {
    realm.delete(fave);
  });
}

export default realm;
