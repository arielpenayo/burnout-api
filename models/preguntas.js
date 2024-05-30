import sequelize from "../connection/connection.js";

import { Sequelize, DataTypes } from "sequelize";

class Preguntas extends Sequelize.Model { }
Preguntas.init({

    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    }
   

},
    {
        timestamps: false,
        tableName: "preguntas",
        modelName: "preguntas",
        sequelize

    })



export default Preguntas;
