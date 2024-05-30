import sequelize from "../connection/connection.js";

import { Sequelize, DataTypes } from "sequelize";

class CuestionarioExt extends Sequelize.Model { }
CuestionarioExt.init({
    preguntaId: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    respuesta: {
        type: DataTypes.INTEGER
    },
    usuarioId: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    nombreApellido: {
        type: DataTypes.STRING(250)
    }
    
},
    {
        timestamps: false,
        tableName: "cuestionariosext",
        modelName: "cuestionariosext",
        sequelize

    })



export default CuestionarioExt;
