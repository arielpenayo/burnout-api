import Usuario from "../models/usuarios.js";
import jsonwebtoken from "jsonwebtoken"; 
const jwt = jsonwebtoken;
const env = process.env;
const SECRET_TOKEN = env.SECRET_TOKEN;
const TOKEN_EXPIRATION = env.TOKEN_EXPIRATION;

const login = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({
      where: { email: req.body.email, contrasena: req.body.contrasena },
    });
    if (!usuario) {
      return res.status(401).json({ message: "WRONG_CREDENTIALS" });
    }

    if (usuario.estado == 0) {
      return res.status(403).send({ message: "USER_DEACTIVATED" });
    }
    const token = jwt.sign({ id: usuario.id }, SECRET_TOKEN, {
      expiresIn: TOKEN_EXPIRATION,
    }); 
    return res.status(200).json({
      id: usuario.id,
      nombreApellido: usuario.nombreApellido,
      email: usuario.email,
      tipo: usuario.tipo, 
      token: token
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error desconocido en el servidor" });
  }
};

 
export { login };
