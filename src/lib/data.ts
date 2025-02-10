// Ejercicio 2
const calcularCoche = (diasDeEstancia: number | null): number => {
  diasDeEstancia = diasDeEstancia || 0;
  switch (true) {
    case diasDeEstancia >= 1 && diasDeEstancia <= 5:
      return diasDeEstancia * 60;
    case diasDeEstancia > 5 && diasDeEstancia <= 8:
      return diasDeEstancia * 50;
    case diasDeEstancia > 8:
      return diasDeEstancia * 45;
    default:
      return 0;
  }
};

const calcularPiso = (diasDeEstancia: number | null): number => {
  diasDeEstancia = diasDeEstancia || 0;
  switch (true) {
    case diasDeEstancia >= 1 && diasDeEstancia <= 7:
      return diasDeEstancia * 50;
    case diasDeEstancia > 7 && diasDeEstancia <= 12:
      return diasDeEstancia * 45;
    case diasDeEstancia > 12:
      return diasDeEstancia * 40;
    default:
      return 0;
  }
};

const calcularHotel = (diasDeEstancia: number | null): number => {
  diasDeEstancia = diasDeEstancia || 0;
  switch (true) {
    case diasDeEstancia >= 1 && diasDeEstancia <= 3:
      return diasDeEstancia * 40;
    case diasDeEstancia > 3 && diasDeEstancia <= 7:
      return diasDeEstancia * 35;
    case diasDeEstancia > 7:
      return diasDeEstancia * 30;
    default:
      return 0;
  }
};

export const options = [
  {
    title: "Alquilar un coche",
    fn: calcularCoche,
  },
  {
    title: "Alquilar Piso",
    fn: calcularPiso,
  },
  {
    title: "Noches de Hotel",
    fn: calcularHotel,
  },
];
