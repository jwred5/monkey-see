
import express from 'express';
import * as bodyParser from 'body-parser';
import {Config} from '../config/Config';
import { MonkeyController } from '../controller/MonkeyController';
export class Api {

	public app : express.Application;
	private config : Config;
	private controller : MonkeyController;


	public constructor(config : Config, monkeyController : MonkeyController) {
		this.config = config;
		this.controller = monkeyController
		this.app = express();
		this.app.use(bodyParser.json());

		this.app.get('/', (req: express.Request, res: express.Response) => {
			res.status(200).send(`Server up and running!`)
		});

	}

}