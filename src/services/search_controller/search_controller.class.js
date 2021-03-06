const { QueryTypes } = require('sequelize');

/* eslint-disable no-unused-vars */
exports.SearchController = class SearchController {
  constructor (options, app) {
    this.options = options || {};
    this.sequelize = app.get('sequelizeClient');
  }

    /*
    *   params(Object) 
        *       - search_term (TEXT)
        *       - categories (ARRAY)
    * */
  async find (params) {
    let response = undefined;

    params.query.search_term = params.query.search_term.trim();

    try {
     response = await this.sequelize.query( `
        SELECT * from locations
        WHERE name LIKE :search_term
        AND main_category_id IN ( :categories )
      `, { 
          replacements: {
              search_term: '%' + params.query.search_term.toLowerCase() + '%',
              categories: params.query.categories
          },
          type: QueryTypes.SELECT 
      } );

        console.log( response );

        return {
            total:  response.length,
            data:   response
        };

    } catch( error ) {
        console.log( error );
    }

    return {
        total:  0,
        data:   []
    };
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
};
