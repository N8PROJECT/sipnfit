export interface ClassProgram {
  id: number;
  title: string;
  schedule: string;
  image: string;
}

export const classPrograms: ClassProgram[] = [
  {
    id: 1,
    title: "YOGA",
    schedule: "Rabu & Jumat - 19:00 WIB",
    image: "/images/yoga.png",
  },
  {
    id: 2,
    title: "KICK N' PUNCH",
    schedule: "Selasa - 19:00 WIB",
    image: "/images/gym-2.png",
  },
  {
    id: 3,
    title: "POUNDFIT",
    schedule: "Kamis - 19:00 WIB",
    image: "/images/poundfit.png",
  },
];
