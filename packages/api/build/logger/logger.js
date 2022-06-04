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
exports.LoggerMiddleware = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var LoggerMiddleware = /** @class */ (function () {
    function LoggerMiddleware(config) {
        this.config = config;
        this.logger = new common_1.Logger(LoggerMiddleware_1.name);
    }
    LoggerMiddleware_1 = LoggerMiddleware;
    LoggerMiddleware.prototype.use = function (req, res, next) {
        var _this = this;
        try {
            if (JSON.parse(this.config.get("DEBUG"))) {
                var body_1 = req.body, method_1 = req.method, originalUrl_1 = req.originalUrl;
                res.on("finish", function () {
                    var statusCode = res.statusCode;
                    _this.logger.log("".concat(statusCode, " | [").concat(method_1, "] ").concat(originalUrl_1, " - ").concat(JSON.stringify(body_1)));
                });
            }
            next();
        }
        catch (_a) {
            next();
        }
    };
    var LoggerMiddleware_1;
    LoggerMiddleware = LoggerMiddleware_1 = __decorate([
        (0, common_1.Injectable)(),
        __metadata("design:paramtypes", [config_1.ConfigService])
    ], LoggerMiddleware);
    return LoggerMiddleware;
}());
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.js.map