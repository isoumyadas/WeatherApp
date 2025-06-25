const ViewWeatherLayout = ({ weatherData }) => {
  return (
    <div className="flex justify-center">
      <div className="w-200 h-auto border-2 border-white mt-9 p-7 rounded-lg grid grid-cols-2 gap-4 bg-[#093FB4]">
        <div className="border-2 border-white rounded-2xl bg-[#749BC2] text-white">
          <div className="flex flex-col items-center gap-5 justify-center p-5">
            <img
              src={weatherData.current.condition.icon}
              alt="weather-icon"
              className="h-20 w-20"
            />
            <h3 className="text-lg font-bold">
              {weatherData.current.condition.text}
            </h3>
          </div>
        </div>
        <div className="border-2 border-white rounded-2xl flex flex-col gap-4 p-7 bg-[#749BC2] text-white">
          <h2 className="text-lg font-bold">
            Location: {weatherData.location.name}
            {","}
            <span>{weatherData.location.country}</span>
          </h2>
          <p className="text-lg font-bold">
            Humidity: {weatherData.current.humidity}
          </p>
          <p className="text-lg font-bold">
            Wind: {weatherData.current.wind_kph} kph
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewWeatherLayout;
