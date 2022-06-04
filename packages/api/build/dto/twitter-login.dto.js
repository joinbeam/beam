"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwitterLoginDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var TwitterLoginDto = /** @class */ (function () {
    function TwitterLoginDto() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "aHa84d" }),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], TwitterLoginDto.prototype, "accessTokenKey", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)({ example: "aHa84d" }),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], TwitterLoginDto.prototype, "accessTokenSecret", void 0);
    return TwitterLoginDto;
}());
exports.TwitterLoginDto = TwitterLoginDto;
//# sourceMappingURL=twitter-login.dto.js.map