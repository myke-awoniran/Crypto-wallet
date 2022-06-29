"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
require("reflect-metadata");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
function controller(routePrefix) {
    return function (target) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                console.log(`${routePrefix}${path}`);
                exports.router.get(`${routePrefix}${path}`, routeHandler);
            }
        }
    };
}
exports.controller = controller;
