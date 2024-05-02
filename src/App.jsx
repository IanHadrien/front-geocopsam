import { ToastContainer } from "react-toastify";
import MyRoutes from "./routes/Index"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <MyRoutes />
      <ToastContainer />
    </>
  )
}

export default App;
