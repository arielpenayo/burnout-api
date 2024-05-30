import Cuestionarios from "../models/cuestionarios.js";

const update = async (req, res) => {
  try {
    await Cuestionarios.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    const registroActualizado = await Cuestionarios.findByPk(req.params.id);
    res.status(200).json(registroActualizado);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findAll = async (req, res) => {
  try {
    const clientes = await Cuestionarios.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const findById = async (req, res) => {
  try {
    const cliente = await Cuestionarios.findByPk(req.params.id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).send({ message: 'Cuestionario not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export {update, findAll, findById };