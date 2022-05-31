import { NestFactory } from "@nestjs/core"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import { AppModule } from "./modules/app.module"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	const config = new DocumentBuilder()
		.setTitle("Beam API")
		.setDescription("Beam API written in NestJS & GraphQL.")
		.setVersion("1.0")
		.addTag("beam")
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup("api", app, document)

	await app.listen(8080)
}
bootstrap()
