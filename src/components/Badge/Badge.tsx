import { BadgeInterface } from "../types"
import  '../Badge/Badge.css'

const Badge = ({firstname, surname, job, mail, worker} : BadgeInterface) => {
    
  return (
    <>
    <div className="card-wrapper">
        <h1>Worker : {worker}</h1>
        <span>Name: {firstname}</span>
        <span>Surname: {surname}</span>
        <span>job: {job}</span>
        <span>mail: {mail}</span>
    </div>

    </>

  )
}

export default Badge