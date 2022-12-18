import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from "./Routes/Route/Route";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <div className="flex justify-center">
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
