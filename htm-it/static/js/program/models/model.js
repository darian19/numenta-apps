/* ----------------------------------------------------------------------
 * Numenta Platform for Intelligent Computing (NuPIC)
 * Copyright (C) 2015, Numenta, Inc.  Unless you have purchased from
 * Numenta, Inc. a separate commercial license for this software code, the
 * following terms and conditions apply:
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero Public License for more details.
 *
 * You should have received a copy of the GNU Affero Public License
 * along with this program.  If not, see http://www.gnu.org/licenses.
 *
 * http://numenta.org/licenses/
 * ---------------------------------------------------------------------- */

(function() {

  /**
   * Backbone.js Model for a HTM-IT Metric/Model (/_models API endpoint result)
   * @constructor
   * @copyright © 2014 Numenta
   * @public
   * @requires Backbone.js
   * @returns {Object} Backbone.js Model object
   */
  HTM-ITUI.ModelModel = Backbone.Model.extend({

    // Backbone.Model properties

    idAttribute: 'uid',

    // Custom properties

    // Backbone.Model methods

    /**
     * Backbone.Model.parse()
     */
    parse: function(response, options) {
      if('name' in response) {
        response.metric = response.name.split('/').pop();
      }

      return response;
    },

    /**
     * Backbone.Model.sync()
     * Custom override for Backbone.sync(), since we're using our own API
     *  library REST calls, and not going to let Backbone do XHR directly.
     */
    sync: function(method, model, options) {
      var options = options || {},
          result = null;

      switch(method) {
        case 'create':
          result = this.collection.api.createModels(
            model,
            function(error, response) {
              if(error) return options.error(error);
              return options.success(response[0]);
            }
          );
          break;

        case 'read':
          break;

        case 'update':
          break;

        case 'delete':
          result = this.collection.api.deleteModel(
            model.id,
            function(error, response) {
              if(error) return options.error(error);
              return options.success();
            }
          );
          break;
      }

      return result;
    }

    // Custom methods

  });

}());
