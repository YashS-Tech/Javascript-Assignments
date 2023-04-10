"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default.get('https://api.github.com/gists/public')
    .then(response => {
    const gists = response.data.slice(0, 5);
    console.log(gists);
})
    .catch(error => {
    console.error(error);
});
