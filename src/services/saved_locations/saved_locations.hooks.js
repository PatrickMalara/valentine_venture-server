const { authenticate } = require('@feathersjs/authentication').hooks;

const append_location_name = async function( context ) {
    console.log( context.result.data );

    // @TODO make this faster, not sure exactly how? but maybe Promise.all in chunks of 5? We'll see
    let i = 0;
    for( i = 0; i < context.result.total; i += 1 ) {
       context.result.data[i]["location_name"] = (await context.app.service('locations').get( context.result.data[i].location_id )).name;
    }

    return context;
}

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [ append_location_name ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
