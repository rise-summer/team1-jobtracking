import styled from 'styled-components';

export const PostWrapper = styled.div`
    padding:50px 50px 50px 50px;
    width: 55%;
    margin: auto;
    margin-top: 60px;
    border-radius: 15px;
    border: 1px solid grey;
    box-shadow: 0 2px 3px #ccc;
    
    .header{
    text-align: center;
    }

`; 
export const Addition = styled.div`

padding-top: 50px;
padding-right:100px;
     

    .addNotes{
      display: flex;
      justify-content:Space-evenly;
      margin-left: -80px;
      
          
    } 

    .editIcon{
       width:20px;
    }

    .crossIcon{
      width:18px;

    }
    
    .text{
        width: 85%;
        padding: 5px;  
        border: 1px solid #ccc;  
        border-radius: 4px;  
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-top: 6px; /* Add a top margin */
        margin-bottom: 16px; /* Bottom margin */
        resize: vertical
    }  

        .share{
          display: flex;

      }


      .shareIcon{
         width:25px;
         margin-top: -15px;
         margin-left: 20px;
      }

     
       
      .similar{
        width: 60%;
        border: 1px solid #ccc;
        border-radius: 4px; 
        margin-left: 5px;
      }
      
      .backButton {
        display: flex;
        justify-content: center;
        margin-top: 50px;
        
      }

      

        

        

       

      
      
`; 