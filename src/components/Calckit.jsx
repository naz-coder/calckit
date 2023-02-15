import React, {useState} from 'react'
import {AppModalOverlay} from "../components/CalckitStyle"
// import {FiDelete} from "react-icons/fi"
import LogoBgRmCr from "../assets/img/LogoBgRmCr.png";

const Calckit = () => {
  const [result, setResult] = useState("");

    /* clearDisplayScreen function removes all screen content at once */
    const clearScreen = () =>{
      setResult("")
    }

    /* deleteValue function removes screen value individually */
    const deleteValue = () => {
      setResult(result.slice(0, -1));
    }

    /* percentage function calculates the % of the screen value */
    const percentage = () => {}

    /* displayValue function displays the clicked value on the screen */
    const displayValue = (e) =>{
      setResult(result.concat(e.target.value))
    }

    /* calculate function displays the result of the solves arithemtric */
    const calculate = () => {
      setResult(eval(result).toString())
    }

  return (
    <React.Fragment>
      <AppModalOverlay>
        {/* <div className='app-title'><p>Calckit</p></div> */}
        <div  className='modal-container'>

        <table>
            {/* Disply screen of the app */}
            <tr>
                
            {/* <td> <input class="display-box" type="text" id="result" disabled /> </td> */}
                <td colSpan={3}><input className='calculator-screen' type="text"   disabled value={result} placeholder="0"/></td>
                
            </tr>

            <tr className='row-1'>
                <td className='operand'><input className='clear' type="button" value="C" onClick={clearScreen}/></td>
                <td className='operand'><input className='del' type="button" value="D" onClick={deleteValue}/></td>
                <td className='operand'><input className='percent' type="button" value="%" onClick={displayValue}/></td>
                <td className='operand'><input className='add' type="button" value="+" onClick={displayValue}/></td>
            </tr>

            <tr className='row-2'>
                <td><input type="button" value={7} onClick={displayValue}/></td>
                <td><input type="button" value={8} onClick={displayValue}/></td>
                <td><input type="button" value={9} onClick={displayValue}/></td>
                <td className='operand'><input className='mult' type="button" value="*" onClick={displayValue}/></td>
            </tr>

            <tr className='row-3'>
                <td><input type="button" value="4" onClick={displayValue}/></td>
                <td><input type="button" value="5" onClick={displayValue}/></td>
                <td><input type="button" value="6" onClick={displayValue}/></td>
                <td className='operand'><input className='substract' type="button" value="-" onClick={displayValue}/></td>
            </tr>

            <tr className='row-4'>
                <td><input type="button" value="1" onClick={displayValue}/></td>
                <td><input type="button" value="2" onClick={displayValue}/></td>
                <td><input type="button" value="3" onClick={displayValue}/></td>
                <td className='operand'><input className='divide' type="button" value="/" onClick={displayValue}/></td>
            </tr>

            <tr className='row-5'>
                <td><input type="button" value="0" onClick={displayValue}/></td>
                <td><input type="button" value="." onClick={displayValue}/></td>
                <td className='operand equivalent'><input className='equal' type="button" value="=" onClick={calculate}/></td>
            </tr>
            
            
        </table>
        <div className='copyright'>   
          <p>Calckit &copy;</p>
          <img src={LogoBgRmCr} alt='CodeSpac Logo'/>
        </div>
        </div>

      </AppModalOverlay>
    </React.Fragment>
  )
}

export default Calckit
