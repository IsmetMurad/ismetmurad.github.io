import locationLogo from '../../../imgs/location.svg'
import phoneLogo from '../../../imgs/phone-white.svg'
import mailLogo from '../../../imgs/mail.svg'
import "../Footer/footer.css"


const Footer = () => {
  return (
    <>
    <footer>
    
        <div className='footer-wrapper-1'>

            <div className='location-wrapper'>
                <img src={locationLogo} alt="" />
                <div className='location-detalis'>
                    <span>21 Revolution Street</span>
                    <span>Paris, France</span>
                </div>
            </div>

            <div className='phone-wrapper'>
            <img src={phoneLogo} alt="" />
            <div className='phone-detalis'>
                <p className='number'>+ 1 555 123456</p>
            </div>
            </div>

            <div className='mail-wrapper'>
                <img src={mailLogo} alt="" />
                <div className='mail-detalis'>
                    <a href=""><p>support@company.com</p></a>
                </div>  
            </div>
      

        </div>

        <div className='footer-wrapper-2'>
            <span className='about-company'>About the company</span>
            <span className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt explicabo debitis quis illum, soluta obcaecati, impedit nobis voluptatibus repudiandae ex aut, corrupti deleniti modi tenetur aperiam iure officia quidem velit!</span>
            <span className='why-us'>Why us</span>
            <span className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure debitis quam perspiciatis? Error ex illo, suscipit minima dolorem omnis quis doloribus consequatur natus, assumenda laudantium est, placeat soluta numquam ab.</span>
        </div>

    
    </footer>
    </>
  )
}

export default Footer