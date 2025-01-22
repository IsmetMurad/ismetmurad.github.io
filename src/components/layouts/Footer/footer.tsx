import locationLogo from '../../../imgs/location.svg'
import phoneLogo from '../../../imgs/phone-white.svg'
import mailLogo from '../../../imgs/mail.svg'
import "../Footer/footer.css"
type Props = {}

const Footer = (props: Props) => {
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
            <p className='about-company'>About the company</p>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt explicabo debitis quis illum, soluta obcaecati, impedit nobis voluptatibus repudiandae ex aut, corrupti deleniti modi tenetur aperiam iure officia quidem velit!</p>

        </div>

    
    </footer>
    </>
  )
}

export default Footer