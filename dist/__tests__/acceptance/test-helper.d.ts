import { Examen2VanguardiaApplication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Examen2VanguardiaApplication;
    client: Client;
}
