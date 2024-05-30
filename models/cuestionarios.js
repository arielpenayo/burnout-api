import sequelize from "../connection/connection.js";

import { Sequelize, DataTypes } from "sequelize";

class Cuestionarios extends Sequelize.Model { }
Cuestionarios.init({

    preguntaId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    usuarioId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    respuesta: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
   

},
    {
        timestamps: false,
        tableName: "cuestionarios",
        modelName: "cuestionarios",
        sequelize

    })



export default Cuestionarios;
