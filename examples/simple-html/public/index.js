(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('axios')) :
    typeof define === 'function' && define.amd ? define(['exports', 'axios'], factory) :
    (global = global || self, factory(global.SyncService = {}, global.axios));
}(this, (function (exports, axios) { 'use strict';

    axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;

    class SyncService {
      constructor(url, queryParams) {
        this.url = url;
        this.queryParams = queryParams;
        this.configurationData = {};
      }

      async postFetchConfigurations(url = this.url, params = this.queryParams) {
        const {
          data,
          status
        } = await axios({
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          params,
          url
        });

        if (status === 200) {
          this.configurationState = data;
          return true;
        } else {
          console.log(`Status code ${status} was given`);
          return false;
        }
      }

    }

    exports.SyncService = SyncService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
