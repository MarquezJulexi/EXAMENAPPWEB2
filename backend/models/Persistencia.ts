import mongoose from 'mongoose';
import {Schema, model,Types} from 'mongoose';
import { IPersistencia } from '../interfaces/Persistencia';

const PersitenciaSchema: mongoose.Schema = new Schema<IPersistencia>({
    numerosprestamos: {
        type: Number,
    },
    fechayhora:{
        type: String,
    },
    ciestudiante:{
        type:String,
    },
    numerohoras:{
        type: Number,
    },
    jugadoresparticipantes:{
        type:String,
    },
    tipocancha:{
        type:String,
    },
    estado:{
        type: Number,
        default:1,
        required:true
    }
   

});

const Perssitencia: mongoose.Model<IPersistencia>= model<IPersistencia>('Persistencia', PersitenciaSchema );


export{
    Perssitencia
}