import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
    const [selectedNumber, setSelectedNumber]= useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error,setError] = useState("");



    const generateRandomNumber = (min, max) => {
        // console.log(Math.floor(Math.random() * (max - min) + min));
        return Math.floor(Math.random() * (max - min) + min);
      }
    const rollDice = () =>{
        if(!selectedNumber){
            setError("You have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);

        

        if(selectedNumber == randomNumber){
            setScore((prev)=>prev + randomNumber);
        }else{
            setScore((prev)=>prev-2);
        }

        setSelectedNumber(undefined);
    }

    const resetScore = () =>{
        setScore(0);
    }

    const [showRules,setShowRules] = useState(false);
   

  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score} />
            <NumberSelector setError={setError} error= {error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
            <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules? "Hide":"Show"} Rules</Button>
        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 40px;
    }
`