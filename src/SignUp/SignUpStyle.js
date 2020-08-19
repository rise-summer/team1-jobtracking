import styled from 'styled-components';

export const LoginWrapper = styled.div`
    font-size: 14px;
    margin-top: 5%;

    .signUp-container
    {
        margin-top:40px;
        border-radius: 20px;
    
        width: 40%;
         
        margin: auto;
        border: 1px solid #eee;
        
        padding: 45px;
        text-align: center;
        background-color: lightgrey;
    
    }

    .name{
        width: 100%;
        padding: 6px; 
        border: 1px solid #ccc;  
        border-radius: 25px;  
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-bottom: 16px; /* Bottom margin */
        resize: vertical
    }  

    .signUp{
        display: flex;
        justify-content: space-evenly;
        color: palevioletred;

       }

    
    .option{
        padding-top: 10px;
       
    }


`;

 