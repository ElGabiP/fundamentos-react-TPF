import "./Persona.css";

const amigos = [
  {
    id: 1,
    nombre: "Martín",
    apellido: "García",
    tel: 114343,
    dir: "Cochabamba 21",
  },
  {
    id: 2,
    nombre: "Pedro",
    apellido: "López",
    tel: 3134534,
    dir: "Río Negro 221",
  },
  {
    id: 3,
    nombre: "Gabriel",
    apellido: "Pescio",
    tel: 3134334,
    dir: "Fragueiro 2222",
  },
  { id: 4, nombre: "Rosa", apellido: "Ramos", tel: 3142223, dir: "Calle 21" },
  {
    id: 5,
    nombre: "Liza",
    apellido: "Gómez",
    tel: 3123423,
    dir: "Belgrano 2331",
  },
  {
    id: 6,
    nombre: "Lisa",
    apellido: "Simpson",
    tel: 5555423,
    dir: "Evergreen 231",
  },
];

export default function Persona() {
  return (
    <div className="lista">
      {amigos.map((amigo) => {
        return (
          <div className="persona" key={amigo.id}>
            <p className="nombre">{amigo.nombre}</p>
            <p className="nombre">{amigo.apellido}</p>
            <p className="detalles">Teléfono: {amigo.tel}</p>
            <p className="detalles">{amigo.dir}</p>
          </div>
        );
      })}
    </div>
  );
}
