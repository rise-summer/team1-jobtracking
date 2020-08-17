import styled from 'styled-components';

export const PostWrapper = styled.div`
    padding:15px 15px 15px 15px;
    width: 55%;
    margin: auto;
    margin-top: 15px;
    border-radius: 15px;
    border: 1px solid grey;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    
    .header{
    text-align: center;
    } 

    .crossIcon{
      width:25px;
      margin-top: px;
      display: flex;
    }

`; 

 
export const Addition = styled.div`

 text align: left;

.text{
        width: 100%;
        padding: 5px;  
        border: 1px solid #ccc;  
        border-radius: 4px;  
        box-sizing: border-box; /* Make sure that padding and width stays in place */
      
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
      width: 80%;
   
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
       height: 100%;
       
       border-radius: 4px; 
        
     
      
    }

    .add{
      text-align: left;
      padding-top: 20px;

    }

    .slidecontainer {
      text-align: center;
      float: middle;
      width: 50%;
      margin-top: 20px;
       


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
      
 
      .position{
        float: left;
      }

    .complete{
      display: flex;
      justify-content: center;
      margin-top: 20px;
        } 
      
`; 