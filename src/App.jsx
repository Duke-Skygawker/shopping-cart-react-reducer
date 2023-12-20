// components
import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import { useGlobalContext } from "./Context/Context";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "10rem" }}></div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
