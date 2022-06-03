import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class TwitterLoginDto {
	@ApiProperty({ example: "aHa84d" })
	@IsNotEmpty()
	accessTokenKey: string

	@ApiProperty({ example: "aHa84d" })
	@IsNotEmpty()
	accessTokenSecret: string
}
