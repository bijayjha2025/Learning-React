
import { AppProvider } from "./AppProvider";
import ProductCard from "./ProductCard";

function App() {

  return (
    <AppProvider>
      <ProductCard />
    </AppProvider>
  )
}

export default App
