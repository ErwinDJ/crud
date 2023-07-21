import {
  __commonJS
} from "/build/_shared/chunk-4IYZMDEG.js";

// node_modules/routes-gen/dist/index.js
var require_dist = __commonJS({
  "node_modules/routes-gen/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function route(path, params) {
      if (params) {
        return Object.entries(params).reduce((result, [key, value]) => result.replace(new RegExp(`:${key}\\??`, "g"), value), path).replace(new RegExp("\\/:.+\\?", "g"), "");
      }
      return path;
    }
    exports.route = route;
  }
});

export {
  require_dist
};
//# sourceMappingURL=/build/_shared/chunk-ISZJHPSU.js.map
