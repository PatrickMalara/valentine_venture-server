const { QueryTypes } = require('sequelize');

/* eslint-disable no-unused-vars */
exports.Stats = class Stats {
  constructor (options, app) {
    this.options = options || {};
    this.sequelize = app.get('sequelizeClient');
  }

  async find (params) {
    return [];
  }

  async get (id, params) {

    if ( id === "ratings" ) {

        try {
         const liked_response = await this.sequelize.query( `
            SELECT locs.id, locs.name, ( 
                SELECT COUNT(*) 
                FROM ratings
                WHERE location_id = locs.id AND ratings.liked = 1 
            ) AS likes
            FROM locations locs
            ORDER BY likes DESC
            LIMIT 5
          `, { 
              type: QueryTypes.SELECT 
          } );

        const disliked_response = await this.sequelize.query( `
            SELECT locs.id, locs.name, ( 
                SELECT COUNT(*) 
                FROM ratings
                WHERE location_id = locs.id AND ratings.liked = 0 
            ) AS likes
            FROM locations locs
            ORDER BY likes DESC
            LIMIT 5
          `, { 
              type: QueryTypes.SELECT 
          } );


            return {
                liked:      liked_response,
                disliked:   disliked_response
            };

        } catch( error ) {
            console.log( error );
        }

    } else if ( id == "new" ) {

        try {
         const response = await this.sequelize.query( `
            SELECT id, name
            FROM locations 
            ORDER BY created_on DESC
            LIMIT 10 
          `, { 
              type: QueryTypes.SELECT 
          } );


            return {
                total:  response.total,
                data:   response 
            };

        } catch( error ) {
            console.log( error );
        }

    }

    // Else return 0
    return {
        total:  0,
        data:   []
    };

  }

};
