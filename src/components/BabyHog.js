import { useState } from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

const BabyHog = ({ eyeColor, hobby, name }) => {
  let [weight, setWeight] = useState(0)
  let [imgHeight, setImgHeight] = useState(200)

  const handleChangeWeight = (e) => {
    switch (e.target.name) {
      case '+':
        setWeight(weight += 1)
        setImgHeight(imgHeight += 10)
        break;
      case '-':
        setWeight(weight -= 1)
        setImgHeight(imgHeight -= 10)
        break;
      default:
        console.log('Something went wrong.')
    }
  }

  const handleEyeColor = (eyeColor) => {
    switch (eyeColor) {
      case 'sun':
        return SunBaby
      case 'blue':
        return BlueBaby
      case 'glowing':
        return GlowingBaby
      default:
        return normalBaby
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
          src={handleEyeColor(eyeColor)}
          style={{ height: `${imgHeight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
