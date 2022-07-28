import { Router } from 'express';
import { CrearPersistencia,ObtenerCliente,
    actualizar,ObtenerAdmin, Eliminar,
} from '../controllers/controladores';



const Rutas = Router();
Rutas.post('/crear',CrearPersistencia);
Rutas.get('/obtenercl/:ci',ObtenerCliente);
Rutas.put('/actualizar/:id', actualizar);

Rutas.get('/obteneradmin',ObtenerAdmin);

Rutas.put('/eliminar:id', Eliminar);

export{Rutas};