let users = new Map();
users.set("aaa123", { nombre: "Ana", puntos: 123 });
users.set("ddd123", { nombre: "Diego", puntos: 77 });
users.set("ggg123", { nombre: "Gracia", puntos: 36 });
users.set("jjj123", { nombre: "Julio", puntos: 104 });
export const infoRandom = async (req, res) => {
  try {
    let palo = ["oros", "copas", "espadas", "bastos"][
      Math.floor(Math.random() * 3)
    ];
    let numero = Math.floor(Math.random() * 11) + 1;
    setTimeout(() => {
      res.json({
        palo,
        numero,
      });
    }, 500);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const registrarUsuario = async (req, res) => {
  try {
    let query = req.query;
    let key = query["key"];

    if (!users.get(key))
      return res.status(401).json({
        message: "acceso no autorizado",
      });
    return res.json({ datos: users.get(key) });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
