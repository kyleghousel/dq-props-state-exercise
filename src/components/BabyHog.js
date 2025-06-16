import { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

const BabyHog = ({ eyeColor, hobby, name }) => {
  let [weight, setWeight] = useState(0)
  let [imgHeight, setImgHeight] = useState(200)

  const handleChangeWeight = (e) => {
    console.log(e.target.name)
    if (e.target.name === '+') {
      setWeight(weight += 1)
      setImgHeight(imgHeight += 10)
    } else if (e.target.name === '-') {
      setWeight(weight -= 1)
      setImgHeight(imgHeight -= 10)
    } else {
      console.log('Error: Cannot change weight.')
    }
  }

  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight: {weight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button name="+" onClick={handleChangeWeight}>Increase Weight</button>
      <button name="-" onClick={handleChangeWeight}>Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={
            eyeColor === 'sun' ? SunBaby :
            eyeColor === 'blue' ? BlueBaby :
            eyeColor === 'glowing' ? GlowingBaby :
            normalBaby
          }
          style={{ height: `${imgHeight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
