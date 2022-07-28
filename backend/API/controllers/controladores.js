"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eliminar = exports.ObtenerAdmin = exports.actualizar = exports.ObtenerCliente = exports.CrearPersistencia = void 0;
const Persistencia_1 = require("../models/Persistencia");
const CrearPersistencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dato = __rest(req.body, []);
    const Prestamo = new Persistencia_1.Perssitencia(dato);
    const nuevoPrestamo = yield Prestamo.save();
    res.status(201).json(nuevoPrestamo);
});
exports.CrearPersistencia = CrearPersistencia;
const ObtenerCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ci } = req.params;
        const [Persistencias] = yield Promise.all([
            Persistencia_1.Perssitencia.find({ ciestudiante: ci, estado: 2 }),
        ]);
        res.status(200).json({
            datos: Persistencias,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.ObtenerCliente = ObtenerCliente;
const actualizar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const PersistenciaM = yield Persistencia_1.Perssitencia.findByIdAndUpdate(id, { estado: 4 }, { new: true });
        res.json(PersistenciaM);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
});
exports.actualizar = actualizar;
const ObtenerAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ci } = req.params;
        const [Persistencias] = yield Promise.all([
            Persistencia_1.Perssitencia.find({ ciestudiante: ci, estado: 2 }),
        ]);
        res.status(200).json({
            datos: Persistencias,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.ObtenerAdmin = ObtenerAdmin;
const Eliminar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const PersistenciaMOD = yield Persistencia_1.Perssitencia.findByIdAndUpdate(id, { eliminado: true }, { new: true });
        res.json(PersistenciaMOD);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
});
exports.Eliminar = Eliminar;
