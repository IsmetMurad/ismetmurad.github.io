import Spinner from "../components/Spinner/spinner";
import { useState } from "react";
import '../pages/home.css'
import Toggle from "../components/Toggle/toggle";
function home() {
  const [toggled, setToggled] = useState(false)
  return (
    <>
    <div className="main-wrapper">
        <h1 className="title">The best way to learn React</h1>
        <p className="title-description">Course designed by experts with real-world practice. Join our global community.<span className="free">It's free.</span></p>
        <div className="button-div">
            <button className="learn-button">Start learning now!</button>
        </div>

    </div>

      <Spinner />
      <Toggle value={false} onChange={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </>


  )
};

export default home