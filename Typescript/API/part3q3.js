"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data: users } = yield axios_1.default.get('https://jsonplaceholder.typicode.com/users');
            const { data: posts } = yield axios_1.default.get('https://jsonplaceholder.typicode.com/posts');
            const postsWithUserInfo = posts.map((post) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                const user = users.find((user) => user.id === post.userId);
                return Object.assign(Object.assign({}, post), { name: (_a = user === null || user === void 0 ? void 0 : user.name) !== null && _a !== void 0 ? _a : '', username: (_b = user === null || user === void 0 ? void 0 : user.username) !== null && _b !== void 0 ? _b : '', email: (_c = user === null || user === void 0 ? void 0 : user.email) !== null && _c !== void 0 ? _c : '', city: (_d = user === null || user === void 0 ? void 0 : user.address.city) !== null && _d !== void 0 ? _d : '', zipcode: (_e = user === null || user === void 0 ? void 0 : user.address.zipcode) !== null && _e !== void 0 ? _e : '', phone: (_f = user === null || user === void 0 ? void 0 : user.phone) !== null && _f !== void 0 ? _f : '', website: (_g = user === null || user === void 0 ? void 0 : user.website) !== null && _g !== void 0 ? _g : '', company: (_h = user === null || user === void 0 ? void 0 : user.company.name) !== null && _h !== void 0 ? _h : '' });
            });
            return postsWithUserInfo;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield getPosts();
        console.log(posts);
    });
}
main();
