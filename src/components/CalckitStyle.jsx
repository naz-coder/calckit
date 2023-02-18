import styled from 'styled-components';
import bgPattern from "../assets/img/bgPattern.jpg"

export const AppModalOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    /* background-color: #517E83; */
    background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${bgPattern});
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    overflow-y: auto;
    font-family: 'Righteous', cursive;
    .modal-container{
        /* background-color: linear-gradient; */
        background: linear-gradient(170deg, #1a0816 60%, #3a1331 60%);
        background-position: right bottom;
        transition: all 0.5s ease-out;
        color: #ffffff;
        padding: 25px 7px 10px 7px;
        max-width: 100%;
        width: 270px;
        height: auto;
        border-radius: 0.8rem;
        border-left: 1px solid #1a0816;
        border-top: 1px solid #1a0816;
        border-bottom: 1px solid #3a1331;
        border-right: 1px solid #3a1331;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    .calculator-screen{
        height: 20vh;
        width: 99%;
        background-color: transparent;
        background-position: right bottom;
        transition: all 0.5s ease-out;
        border: 1px solid #1a0816;
        border-radius: 0.5rem;
        box-shadow: inset 0 0 10px #3a1331;
        margin-bottom: 0.6rem;
        color: #eecb59;
        padding: 0 1rem;
        font-size: 1.5rem;
        font-weight: 900;
        text-align: end;
    }

    table{
        max-width: 100%;
        width: 270px;
        height: auto;
    }
    input[type=button] {
        width: 100%;
        height: 70%;
        outline: none;
        background-color: #1a0816;
        background-position: right bottom;
        transition: all 0.5s ease-out;
        color: rgba(117, 19, 93, 0.73);
        font-family: 'IBM Plex Mono', monospace;
        /* font-weight: 900; */
        font-size: 1.1rem;
        color: #d7abd1;
        padding: 0.5rem;
        /* border: 1px solid #241721; */
        border: 1px solid #1a0816;
        border-radius: 0.5rem;
        box-shadow: inset 0 0 10px #3a1331;
        outline: none;
    }
    input[type=button]:hover {
        background-position: right bottom;
        background-color: #140511;
        box-shadow: inset 0 0 10px #c78db9;
        color: #ffffff;
        cursor: pointer;
        opacity: 0.7;
        translate: 5s;
    }
    input:active[type=button] {
        background: #e5e5e5;
        -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
        -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
        box-shadow: inset 0px 0px 5px #c1c1c1;
    }
    .operand input[type=button]{
        color: #d9ad22;
        
    }
    .operand input[type=button]:hover{
        color: #eecb59;
        box-shadow: inset 0 0 10px #c78db9;
    }
    .equivalent input[type=button]{
        background-color: #d9ad22;
        color: #140511;
        width: 144%;
    }
    .equivalent input[type=button]:hover{
        color: #140511;
    }
    .copyright{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1%;
        padding: 2rem 4rem 0 4rem;
    }
    .copyright:hover{
        opacity: 0.9;
        cursor: pointer;
    }
    .copyright p{
        font-size: 0.85rem;
        margin-top: -0.1rem;
        color: #f0daed;
    }
    .copyright img{
        width: 100%;
        max-width: 100px;
        height: auto;
    }
`