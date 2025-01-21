import logo from '../imgs/react.svg'
import './header.css'
import { Link } from 'react-router-dom'
import { Toggle } from './toggle'

function Header  ()  {
  return (
    <>
    <header>
        <div className='wrapper'>
            <img src={logo} alt="" />
            <ul className='li-wrapper'>
              <Link style={{textDecoration: 'none'}} to='/'> <p className="">Home</p></Link> 
              <Link style={{textDecoration: 'none'}} to ='/about'> <p className="">About</p></Link> 
              <Link style={{textDecoration: 'none'}} to='/products'> <p className="">Products</p></Link> 
            </ul>
            <div className='button-wrapper'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
            <Toggle />


        </div>
    </header>
    
    </>

  )
}

export default Header