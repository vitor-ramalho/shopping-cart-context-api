import { useContext } from "react";
import { TshirtList } from "./TshirtList";
import { Cart } from "./Cart";
import { CartContext } from "./CartContext";

function App() {
  const [cart, setCart] = useContext(CartContext);

  const limparCarrinho = () => {
    setCart([]);
  }


  return (
    <div>
      {
        cart.length === 0 ? null : <Cart />
      }
      <TshirtList />
      <button onClick={limparCarrinho}>Limpar Carrinho</button>
    </div>
  );
}

export default App;
