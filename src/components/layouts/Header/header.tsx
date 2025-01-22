import logo from '../../../imgs/react.svg'
import '../Header/header.css'
import { Link } from 'react-router-dom'
function Header  ()  {
  return (
    <>
    <header>
        <div className='wrapper'>
           <div className='logo-wrapper'><img src={logo} alt="" /><span className='react-title'>React</span></div> 
            <ul className='li-wrapper'>
              <Link style={{textDecoration: 'none'}} to='/'> <p className="">Home</p></Link> 
              <Link style={{textDecoration: 'none'}} to ='/about'> <p className="">About</p></Link> 
              <Link style={{textDecoration: 'none'}} to='/products'> <p className="">Products</p></Link> 
            </ul>
            <div className='button-wrapper'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>



        </div>
    </header>
    
    </>

  )
}

export default Header