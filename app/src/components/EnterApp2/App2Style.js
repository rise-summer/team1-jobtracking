import styled from 'styled-components';

export const PostWrapper = styled.div`
    padding:5px 5px 5px 5px;
    width: 50%;
    margin: auto;
    margin-top: 20px;
    border-radius: 15px;
    border: 1px solid grey;
    box-shadow: 0 2px 3px #ccc;
    
    .header{
    text-align: center;
    }

     


`; 

 
export const Addition = styled.div`

.text{
        width: 100%;
        padding: 5px;  
        border: 1px solid #ccc;  
        border-radius: 4px;  
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-top: 6px; /* Add a top margin */
        margin-bottom: 16px; /* Bottom margin */
        resize: vertical
    }  
    .post{
      display: flex;
      justify-content: flex-start;
    }

    .position{
      padding: 5px;  
        border: 1px solid #ccc;  
        border-radius: 4px;  
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-top: 6px; /* Add a top margin */
        margin-bottom: 16px; /* Bottom margin */
      width: 60%;
     
    }

    .name{
      padding: 5px;  
        border: 1px solid #ccc;  
        border-radius: 4px;  
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-top: 6px; /* Add a top margin */
        margin-bottom: 16px; /* Bottom margin */
    margin-left:30px;
    }

    .textArea{
       width: 100%;
       border-radius: 4px; 
     
      
    }

    .whatStage{
      text-align: center;
      padding-top: 20px;

    }

    .slidecontainer {
      text-align: center;
      float: middle;
      width: 100%;
  }

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  
  .slider:hover {
    opacity: 1;
  }
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
  
  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #4CAF50;
    cursor: pointer;
  }
      
  .submitButton {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        padding:20px 20px 20px 20px;
        
      }    

    .complete{
      display: flex;
      justify-content: center;
      margin-top: 10px;
        } 
      
`; 