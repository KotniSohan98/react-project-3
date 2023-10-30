import React, { useState } from 'react'
import styled from 'styled-components';
function RollDice({currentDice, rollDice}) {

    
  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_1" />
        </div>
        <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
    margin-top: 48px;
    p{
        font-size: 24px;
    }
    .dice{
        cursor: pointer;
    }
`