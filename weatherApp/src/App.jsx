import { useState } from "react";
import ViewWeatherLayout from "./components/ViewWeatherLayout";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  const handleSetCity = (e) => {
    setCity(e.target.value);
  };

  const searchWeather = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/current.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}`
      );
      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      console.log("Error while fetching something", error);
    }
  };

  return (
    <>
      <div className="max-w-6xl mt-0 mb-0 mr-auto ml-auto h-dvh bg-blue-100 flex flex-col items-center justify-center">
        <h1 className="text-center pt-7 text-5xl font-mono">CURRENT WEATHER</h1>

        <div className="flex gap-7 justify-center items-center mt-9">
          <input
            type="text"
            placeholder="Your Location"
            className="w-max text-center outline-2 px-2 py-1 rounded-xl"
            onChange={handleSetCity}
          />
          <button
            onClick={searchWeather}
            className="w-max px-5 py-1 bg-blue-600 hover:bg-blue-900 text-white font-bold rounded-2xl cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Before rendering the component we have check if weatherData is true or not if its empty then the viewWeatherLayout component should not render. */}
        {weatherData && <ViewWeatherLayout weatherData={weatherData} />}
      </div>
    </>
  );
}

export default App;

// useEffect(() => {
//     const getCurrentData = async () => {
//       const res = await fetch(
//         `${import.meta.env.BASE_URL}/current.json?key=${
//           import.meta.env.API_KEY
//         }&q=${city}&aqi=${aqi}`
//       );
//       const data = await res.json();
//       console.log(data);
//     };

//     getCurrentData();
//   }, [city]);
