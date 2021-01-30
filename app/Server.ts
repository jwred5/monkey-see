
import {AddressInfo} from 'net';
import * as http from 'http';
import { Api } from './lib/api/Api';
import { MonkeyController } from './lib/controller/MonkeyController';

let api : Api = new Api({'reddit': 'http://foo'}, new MonkeyController());

const server: http.Server = http.createServer(api.app);
const port: Number = 5000;
server.listen(port, () => {
    const {port, address} = server.address() as AddressInfo;
    console.log('Server listening on:','http://' + address + ':'+port);
});