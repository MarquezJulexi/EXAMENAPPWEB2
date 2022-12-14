import axios from "axios"
import {PersistenciaI} from "../interfaces/persistenciaI"

const Maxios= axios.create({
    baseURL:`http://localhost:4500/nombreentidad/`
})
export async function crear (dato:PersistenciaI){
    return await Maxios.post(`crear`,dato)
    .then(({data})=>{return data});
}
export async function ObtenerClient (ci:String|undefined){
    return await Maxios.get(`obtenercl/${ci}`)
    .then(({data})=>{return data});

}
export async function Informado (id:String|undefined) {
    return await Maxios.put(`actualizar/${id}`,)
    .then(({data})=>{return data});

}
