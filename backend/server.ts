import express,{Express,Router} from 'express';
import {dbConnection} from './database/config'
import { Rutas } from './routes/rutas';
import cors from 'cors'
class Server {
    App: Router;
    Router:Router;
    port:Number;
    paths:{[key: string]: string};
    private _express:Express
    constructor () {
       this.App=Router();
       this.Router=Router();
       this.port=Number(process.env["PORT"]);
       this.paths= {
        //localhost:30000/
            ejmplo: '/nombreentidad'
            };
        this.ConectarDB();
        this.middlewares();
        this.routes();
        this.Router.use('/', this.App);
        this._express=  express().use(this.Router)

    }
    private async ConectarDB(){
        await dbConnection();
    };
    private middlewares (){
        this.App.use(cors());
        this.App.use(express.json());
    }
    private routes(){
        this.App.use(this.paths.ejmplo, Rutas)
    }
     listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`);
        })
    }

}
export{
    Server  
}