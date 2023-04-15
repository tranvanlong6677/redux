import { useSelector, useDispatch } from "react-redux"; // hàm connect giúp ứng dụng react giao tiếp được với redux
import { increaseCounter, decreaseCounter } from "./redux/action/actions";
import axios from "axios";
import { useEffect } from "react";
import Home from "./components/Home.jsx";
function App(props) {
  const valueCount = useSelector((state) => {
    return state.counter.count;
  });
  const dataListUsers = useSelector((state) => {
    
  })
  const dispatch = useDispatch();
  // Event handler
  const handleIncrement = () => {
    dispatch(increaseCounter());
  };
  const fetchAllUsers = async () => {
    const res = await axios.get("http://localhost:8080/users/all");
    const data = res ? res.data : [];
    console.log(">>> check data", data);
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}
export default App;
