import { useEffect, useState } from "react";
import Preloader from "./Preloader/Preloader";
import "./blocks/close.css";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [errorData, setIsErrorData] = useState({
    isError: false,
    errorMessage: "",
  });
  const handletoggleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  const [car, setIsCar] = useState({});
  useEffect(() => {
    axios
      .get("https://api.api-ninjas.com/v1/cars?model=camry", {
        headers: { "X-Api-Key": "85egSWpitdZtW5oxJoX5Kg==oTZkdZnfrHMlMnXl" },
      })
      .then((res) => setIsCar(res.data[1]))
      .catch((err) => {
        setIsErrorData({ isError: true, errorMessage: err.message });
        return;
      });
  }, []);

  setTimeout(() => {
    setIsLoading(true);
  }, 3000);
  console.log(car);
  return !isLoading ? (
    <>
      <div className="flex items-center h-screen justify-center">
        <div className="flex flex-col justify-center gap-6">
          <span className="text-white m-auto animate-pulse">Loading...</span>
          <Preloader />
        </div>
      </div>
    </>
  ) : !errorData.isError ? (
    <>
      <div className="flex items-center h-screen">
        <div className="flex bg-white rounded-lg w-2/4  flex-col max-sm:m-8 m-auto p-4 max-sm:p-0 justify-between">
          <div className="flex flex-col md:flex-row gap-2 justify-start">
            <img
              className="max-md:w-full max-md:h-1/3 lg:w-72 h-fit w-48 flex-initial rounded-lg hover:opacity-75 cursor-pointer"
              src="../src/images/camry.jpeg"
              alt="Автомобиль"
            />
            <div className="max-sm:flex max-sm:flex-col grid grid-cols-options gap-x-2 max-sm:pl-2">
              <h2 className="max-sm:text-sm md:text-sm text-xl">Компания:</h2>
              <p className="max-sm:text-sm max-sm:text-start md:text-sm text-lg text-right">
                {car.make}
              </p>
              <h2 className="max-sm:text-sm md:text-sm text-xl">Модель:</h2>
              <p className="max-sm:text-sm max-sm:text-start md:text-sm text-lg text-right">
                {car.model}
              </p>
              <h2 className="max-md:hidden md:text-sm text-xl">Год:</h2>
              <p className="max-md:hidden md:text-sm text-lg text-right">
                {car.year}
              </p>
              <h2 className="max-md:hidden md:text-sm text-xl">
                Количество
                <br />
                цилиндров:
              </h2>
              <p className="max-md:hidden md:text-sm text-lg text-right">
                {car.cylinders}
              </p>
              <h2 className="max-md:hidden md:text-sm text-xl">Топливо:</h2>
              <p className="max-md:hidden md:text-sm text-lg text-right">
                {car.fuel_type}
              </p>
            </div>
          </div>
          <div className="m-0 md:mb-6 ml-auto mr-auto flex flex-col gap-2">
            <span className="text-xs hidden md:block mt-1 mb-2">
              Традиционно для японского рынка Камри хорошо оснащена
              разнообразными полезными функциями: даже в базовых комплектациях
              есть ксеноновая оптика, ПТФ, электрические регулировки передних
              кресел, разработчики предусмотрели кнопку запуска мотора, салонный
              фильтр.
            </span>
            <button
              onClick={handletoggleOpenMenu}
              className="max-sm:p-1 max-sm:mb-2 max-sm:text-sm bg-emerald-300 rounded-xl p-2 text-black text-xl hover:bg-sky-700 hover:text-white transition-all duration-300"
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${isOpen ? "hidden" : ""} bg-opacity-50 bg-black fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center`}
      >
        <div className=" bg-white rounded-lg p-6 relative">
          <div
            onClick={handletoggleOpenMenu}
            className="close absolute -right-7 -top-4 max-md:right-2 max-md:-top-8 hover:rotate-45 cursor-pointer transition-all duration-300 hover:opacity-50"
          ></div>
          <div className="flex flex-col md:flex-row gap-2 justify-start">
            <img
              className="max-md:w-full max-md:h-1/3 lg:w-72 h-fit w-48 flex-initial rounded-lg hover:opacity-75 cursor-pointer"
              src="../src/images/camry.jpeg"
              alt="Автомобиль"
            />
            <div className="max-sm:flex max-sm:flex-col grid grid-cols-options gap-x-2 max-sm:pl-2">
              <h2 className="max-sm:text-sm md:text-sm text-xl">Цвет:</h2>
              <p className="max-sm:text-sm max-sm:text-start md:text-sm text-lg text-right">
                Черный
              </p>
              <h2 className="max-sm:text-sm md:text-sm text-xl">Двигатель:</h2>
              <p className="max-sm:text-sm max-sm:text-start md:text-sm text-lg text-right">
                {car.displacement}
              </p>
              <h2 className="max-md:hidden md:text-sm text-xl">Год:</h2>
              <p className="max-md:hidden md:text-sm text-lg text-right">
                {car.year}
              </p>
              <h2 className="max-md:hidden md:text-sm text-xl">
                Количество
                <br />
                цилиндров:
              </h2>
              <p className="max-md:hidden md:text-sm text-lg text-right">
                {car.cylinders}
              </p>
              <h2 className="max-md:hidden md:text-sm text-xl">Топливо:</h2>
              <p className="max-md:hidden md:text-sm text-lg text-right">
                {car.fuel_type}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-white flex items-center h-screen mr-auto ml-auto justify-center">
        {errorData.errorMessage}
      </h1>
    </>
  );
}

export default App;
