import Home from './component/Home'
import './App.css';
import logo from './assets/logo.png'
import region from './assets/region.png'
import favicon from './assets/favorite.png'
import profle from './assets/profile.png'
import cart from './assets/cartnotification.png'

function App() {
  return (
    <>
     {/* Navbar section  */}
      <div className='navbar'>
        <div><img src={logo} alt='' /></div>

        <div className='navbar-item'>
          <div><img src={region} alt='' /></div>

          <div>India (English) INR</div>
          <div> <img src={favicon} alt='' /></div>
          <div> <img src={cart} alt='' /></div>
          <div><img src={profle} alt='' /></div>

        </div>

      </div>

      <Home />


    </>


  );
}

export default App;
