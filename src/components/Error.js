import { useRouteError } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../utils/store";
import Header from "./Header";
import error from "../img/error.png";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <Provider store={store}>
        <Header />
      </Provider>

      <div className="flex flex-col items-center text-center m-5 p-5">
        <img src={error} className="w-96" />
        <h1 className="text-3xl m-5 p-5">Oops...looks like this link does not exist.</h1>
        <p className="text-xl text-stone-500">{err.status + " " + err.statusText}</p>
      </div>
    </div>
  );
};

export default Error;
