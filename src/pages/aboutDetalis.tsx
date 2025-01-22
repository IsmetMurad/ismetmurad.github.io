import { useParams } from 'react-router'



const AboutDetalis = () => { 
    const { id } = useParams()
    console.log(id)
  return (
    <div>AboutDetalisc {id}</div>
  )
}

export default AboutDetalis