import { Injectable } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import Twitter from "twitter"

import { SocialInterface } from "src/interfaces/social.interface"
import { TwitterLoginDto } from "../dto/twitter-login.dto"

@Injectable()
export class TwitterService {
	constructor(private configService: ConfigService) {}

	async getProfileByToken(
		loginDto: TwitterLoginDto
	): Promise<SocialInterface> {
		const twitter = new Twitter({})
	}
}
