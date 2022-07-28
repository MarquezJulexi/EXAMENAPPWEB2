import axios from "axios"
import {PersistenciaI} from "../interfaces/persistenciaI"

const Maxios= axios.create({
    baseURL:`http://localhost:4500/nombreentidad/`
})
export async function crear (dato:PersistenciaI){
    return await Maxios.post(`crear`,dato)
    .then(({data})=>{return data});
}
