import { Outlet } from 'react-router';
import Header from './components/layouts/Header/header'
import Footer from './components/layouts/Footer/footer';


function App() {
  return(
   <>
   
  <Header />
  <Outlet />
  <Footer />
  
  </>
  );
}
export default App;