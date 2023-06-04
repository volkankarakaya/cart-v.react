// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './context';

function App() {
  const {greeting} = useGlobalContext()
  console.log(greeting)
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
