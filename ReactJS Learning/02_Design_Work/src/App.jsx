import "./App.css";
import Card from "./components/Card";
import carData from "./constant/cardData";

function App() {
  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-500 p-4 rounded-xl">
        Learning to integrate tailwind
      </h1>

      <div className="flex flex-wrap gap-6 max-w-6xl mx-auto mt-8 justify-center">
        {carData.map((car) => (
          <div
            key={car.id}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex justify-center"
          >
            <Card
              imgUrI={car.image}
              cardTitle={car.title}
              description={car.description}
              btnLabel={car.linkText}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
