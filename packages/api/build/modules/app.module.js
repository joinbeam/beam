"use strict"
var __decorate =
	(this && this.__decorate) ||
	function (decorators, target, key, desc) {
		var c = arguments.length,
			r =
				c < 3
					? target
					: desc === null
					? (desc = Object.getOwnPropertyDescriptor(target, key))
					: desc,
			d
		if (
			typeof Reflect === "object" &&
			typeof Reflect.decorate === "function"
		)
			r = Reflect.decorate(decorators, target, key, desc)
		else
			for (var i = decorators.length - 1; i >= 0; i--)
				if ((d = decorators[i]))
					r =
						(c < 3
							? d(r)
							: c > 3
							? d(target, key, r)
							: d(target, key)) || r
		return c > 3 && r && Object.defineProperty(target, key, r), r
	}
Object.defineProperty(exports, "__esModule", { value: true })
exports.AppModule = void 0
var apollo_1 = require("@nestjs/apollo")
var common_1 = require("@nestjs/common")
var graphql_1 = require("@nestjs/graphql")
var path_1 = require("path")
var app_controller_1 = require("../controllers/app.controller")
var app_service_1 = require("../services/app.service")
var AppModule = /** @class */ (function () {
	function AppModule() {}
	AppModule = __decorate(
		[
			(0, common_1.Module)({
				imports: [
					graphql_1.GraphQLModule.forRoot({
						driver: apollo_1.ApolloDriver,
						debug: false,
						playground: true,
						typePaths: ["../../graphql/*.graphql"],
						definitions: {
							path: (0, path_1.join)(
								process.cwd(),
								"src/graphql.ts"
							),
							outputAs: "class",
						},
					}),
				],
				controllers: [app_controller_1.AppController],
				providers: [app_service_1.AppService],
			}),
		],
		AppModule
	)
	return AppModule
})()
exports.AppModule = AppModule
//# sourceMappingURL=app.module.js.map
