'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  getItems: function getItems() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(['Item 1', 'Item 2', 'Item 3'].map(function (item, i) {
          return {
            id: i,
            label: item
          };
        }));
      }, 500);
    });
  }
};
//# sourceMappingURL=WebAPI.js.map