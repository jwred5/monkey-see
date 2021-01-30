export class Config {

	public reddit : any;
	public constructor() {
		let config:any = require('config');
		this.reddit = config.get('reddit');
	}

}