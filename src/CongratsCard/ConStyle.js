import styled from 'styled-components';

export const PostWrapper = styled.div`
    padding:50px 50px 50px 50px;
    width: 60%;
    
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    
    .header{
    text-align: center;
    }

`; 
export const Addition = styled.div`
    padding-top:20px;

     
    .add {   
        flex-flow: column wrap;
        align-items: left;
        flex-direction: column;
        align-items: stretch;
        }

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
      
        .see {  
            display: flex; 
            flex-flow: column wrap;
            align-items: left;
            flex-direction: row;
            width: 60%;
            align-items: stretch;
            }
      
      .form-outline label {
        margin: 5px 10px 5px 0;
      }
      
      
      .backButton {
        padding: 10px 20px;
        background-color: #C0C0C0;
        border: 1px solid #ddd;
        color: black;
        cursor: pointer;
        text-align: center;
        display: flex;
      }

      .editIcon{
        float:left;
        height:50px;
        position:absolute;
        top:10px;
        right:60px;
        height:25px;

      }

        .crossIcon{
            position:absolute;
            top:20px;
            right:100px;
            height:25px;

        }

        .share{
            flex-direction: row;

        }

        .shareIcon{
            
            top:10px;
            right:200px;
            width:25px;
            height:-25px;

        }

      
      
`; 