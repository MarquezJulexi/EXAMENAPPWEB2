import { Request, Response } from 'express'
import { Perssitencia } from '../models/Persistencia'
const CrearPersistencia = async (req: Request, res: Response) => {
    const { ...dato } = req.body;
    const Prestamo = new Perssitencia(dato);
    const nuevoPrestamo = await Prestamo.save();
    res.status(201).json(nuevoPrestamo);
}
const ObtenerCliente = async(req:Request, res:Response)=>{
   try {
    const {ci} = req.params;
    const [Persistencias] = await Promise.all([
        
        Perssitencia.find({ciestudiante:ci,estado:2}),
    ])
    res.status(200).json({
        datos:
            Persistencias,
    });
   } catch (error) {
    console.log(error);
   }
}
const actualizar = async(req:Request, res:Response) => {
    try {
        const {id} = req.params;
        
        const PersistenciaM= await Perssitencia.findByIdAndUpdate(id,{estado:4},{new:true})
        res.json(PersistenciaM);
    } catch (error) {
        console.log(error) ;
        res.status(400).json({message: error});
    }
}
const ObtenerAdmin = async(req:Request, res:Response) => {
    try {
        const { ci } = req.params;
        const [Persistencias] = await Promise.all([

            Perssitencia.find({ ciestudiante: ci, estado: 2 }),
        ])
        res.status(200).json({
            datos:
                Persistencias,
        });
    } catch (error) {
        console.log(error);
    }
}
const Eliminar = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const PersistenciaMOD = await Perssitencia.findByIdAndUpdate(id, { eliminado: true }, { new: true });
        res.json(PersistenciaMOD);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
}
export {
    CrearPersistencia,
    ObtenerCliente,
    actualizar,
    ObtenerAdmin,
    Eliminar


}
