import CuestionarioExt from "../models/cuestionarioExt.js";


const findAll = async (req, res) => {
  try {
    const cuestionarios = await CuestionarioExt.findAll();
    res.status(200).json(cuestionarios);
  } catch (error) {
    res.status(500).json(error);
  }
};
//make a find all by filter
const findAllByFilter = async (req, res) => {
  try {
    const cuestionarios = await CuestionarioExt.findAll({
      where: req.body
    });
    res.status(200).json(cuestionarios);
  } catch (error) {
    res.status(500).json(error);
  }
}

const findById = async (req, res) => {
  try {
    const cuestionario = await CuestionarioExt.findByPk(req.params.id);
    if (cuestionario) {
      res.status(200).json(cuestionario);
    } else {
      res.status(404).send({ message: 'Pregunta not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export { findAll, findById,findAllByFilter };