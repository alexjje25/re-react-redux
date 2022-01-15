import styled from 'styled-components';


export const Form = styled.div`
      margin-top: 125px;
      display: flex;
      flex-direction: column;
      width: 40%;
      margin-left: 25vw;

     input{
        background-color: transparent;
        color: #eeeeee;
        outline: none;
        outline-style: none;
        outline-offset: 0;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: solid #eeeeee 2px;
        
        margin-bottom: 60px;

        &: focus{
            border-bottom: 1px solid red;
        }

        ::-webkit-input-placeholder {
        color: #eeeeee;
        position: sticky; top: 10px;
           
        

        
        }
    
     }
     

     
}
`;

export const ProfilePicture = styled.div`
   img { 
    max-width:250px;
    margin-top: -310px;
    margin-left: -11px;
    }
    
  
   
`;




