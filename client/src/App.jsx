import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import RouterComponent from "./router/index";
import store from "./stores";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={RouterComponent} />
      </Provider>
    </>
  );
}

export default App;
