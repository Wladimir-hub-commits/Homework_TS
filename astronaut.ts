// Определение типа Robot
type Robot = {
  model: string;
};

// Определение типа Astronaut
type Astronaut = {
  isInSpace: boolean;
  experienceYears: number;
  assistantRobot: Robot;
  missions: string[];
};

// Создание типизированных переменных
const astronaut1: Astronaut = {
  isInSpace: true,
  experienceYears: 5,
  assistantRobot: { model: "XR-12" },
  missions: ["Moon Landing", "ISS Maintenance"],
};

const astronaut2: Astronaut = {
  isInSpace: false,
  experienceYears: 2,
  assistantRobot: { model: "TX-99" },
  missions: ["Training Mission"],
};