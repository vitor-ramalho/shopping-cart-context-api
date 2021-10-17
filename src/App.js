import { useContext } from "react";
import { TshirtList } from "./TshirtList";
import { Cart } from "./Cart";
import { CartContext } from "./CartContext";

function App() {
  const [cart] = useContext(CartContext);

  return (
      <div>
        {
          cart.length === 0 ? null : <Cart />
        }
        <TshirtList />
      </div>
  );
}

export default App;
