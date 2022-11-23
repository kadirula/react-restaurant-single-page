/* Components */
import { Header, Footer } from './components/index';
import Home from './pages/Home';
const App = () => {
  return (
    <div className='main'>
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
