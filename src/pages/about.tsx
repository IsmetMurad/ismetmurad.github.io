import '../pages/about.css'
import Badge from '../components/Badge/Badge'




const about = () => {
  return (
    <>
    <div className='badge-wrapper'>
    <Badge firstname={'Jack'} surname={'Joe'} job={'Programmer'} mail={'jackjoe123321@Gmail.com'} worker={1} />
    <Badge firstname={'John'} surname={'Doe'} job={'Pilot'} mail={'johndoe135531@mail.com'} worker={2} />
    <Badge firstname={'Smith'} surname={'Jhonson'} job={'Asistant'} mail={'smithjhonson123@mail.ru'} worker={3} />
    <Badge firstname={'William'} surname={'Davis'} job={'Bus Driver'} mail={'williamdavis133@mail.com'} worker={4} />
    <Badge firstname={'Davis'} surname={'Rodriguez'} job={'Teacher'} mail={'davisroudriguez323@mail.com'} worker={5} />
    <Badge firstname={'David'} surname={'Garcia'} job={'Police'} mail={'davidgarica135@mail.ru'} worker={6} />
    </div>



    </>
  )
}

export default about