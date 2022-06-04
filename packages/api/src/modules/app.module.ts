import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { join } from "path"
import { AppController } from "../controllers/app.controller"
import { AppService } from "../services/app.service"

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			debug: false,
			playground: true,
			typePaths: ["../../graphql/*.graphql"],
			definitions: {
				path: join(process.cwd(), "src/graphql.ts"),

				outputAs: "class",
			},
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
