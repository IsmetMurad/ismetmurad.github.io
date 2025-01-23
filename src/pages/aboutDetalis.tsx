import { useParams } from 'react-router'



const AboutDetalis = () => { 
    const { id } = useParams()
    console.log(id)
  return (
    <div>
            <h1>AboutDetalis </h1>
            <h3>ID is : {id}</h3>
    </div>
    

  )
}

export default AboutDetalis