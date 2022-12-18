import { useContext } from "react"
import { CalcContext } from "../context/CalculateContext"


const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className="result-screen" >
      {calc.num ? calc.num : calc.res}
      </div>
  )
}

export default Screen