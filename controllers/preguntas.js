import Preguntas from "../models/preguntas.js";


const findAll = async (req, res) => {
  try {
    const preguntas = await Preguntas.findAll();
    res.status(200).json(preguntas);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findById = async (req, res) => {
  try {
    const pregunta = await Preguntas.findByPk(req.params.id);
    if (pregunta) {
      res.status(200).json(pregunta);
    } else {
      res.status(404).send({ message: 'Pregunta not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { findAll, findById };