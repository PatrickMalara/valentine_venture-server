const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [  ],
    find: [],
    get: [],
    create: [ authenticate('jwt') ],
    update: [ authenticate('jwt') ],
    patch: [ authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [],
    find: [ async context => {

        if ( "result" in context === false ) {
            return context;
        }
        

        // @TODO Promise.all
        let comment = undefined;
        let user = undefined;
        for ( let i = 0; i < context.result.data.length; i++ ) {
            comment = context.result.data[i];
            try {
                user = await context.app.service("users").get( comment.user_id );
                comment.first_name = user.first_name;
                comment.last_name = user.last_name;
            }catch(error) {
                console.log(error);
            }
        }

        return context;
    } ],
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
