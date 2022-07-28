"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perssitencia = void 0;
const mongoose_1 = require("mongoose");
const PersitenciaSchema = new mongoose_1.Schema({
    numerosprestamos: {
        type: Number,
    },
    fechayhora: {
        type: String,
    },
    ciestudiante: {
        type: String,
    },
    numerohoras: {
        type: Number,
    },
    jugadoresparticipantes: {
        type: String,
    },
    tipocancha: {
        type: String,
    },
    estado: {
        type: Number,
        default: 1,
        required: true
    },
    eliminado: {
        type: Boolean,
        default: false,
        required: true,
    }
});
const Perssitencia = (0, mongoose_1.model)('Persistencia', PersitenciaSchema);
exports.Perssitencia = Perssitencia;
