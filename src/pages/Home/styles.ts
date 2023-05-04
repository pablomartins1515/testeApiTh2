import styled from 'styled-components';


export const HeaderContainer = styled.div `
  background-color: ${props => props.theme['header_color']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 12rem 1rem 12rem;
  
  & > img {
    height: 2.375rem;
  }
`
export const FormStyles = styled.form `
  display: flex;
  align-items: center;

  & > input {
    width: 10rem;
    height: 3.320rem;
    margin-right: 8px;
    padding-left: 18px;

    background-color: ${(props) => props.theme['gray_300']};
    color: ${(props) => props.theme['gray_100']};
    border-style: none;
    border-radius: 8px;

    font-size: 15px;
    cursor: pointer;

    align-items: center;

    &::-webkit-calendar-picker-indicator {
      color: ${(props) => props.theme['gray_100']};
    }
  }
`
export const ButtonStylesHeader = styled.button `
  width: 3.320rem;
  height: 3.320rem;

  border-style: none;
  border-radius: 8px;
  background: ${(props) => props.theme ['orange']};
  color: ${(props) => props.theme ['white']};
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`

export const Table = styled.table`
  flex: 1;  
  width: 60rem;
  border-collapse: collapse;
  color: ${(props) => props.theme['white']};  

  border-spacing: 0px;
  margin-top: 50px;
  margin-left: 198px;

  display: flex;
  flex-direction: column;

  & > thead {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px; 
    display: flex;
    width: 100%; 
    background-color: ${(props) => props.theme['orange']}; 
  }
    
  & > thead > tr > th{
    background-color: ${(props) => props.theme['orange']};
    white-space: nowrap;
    padding: 1.4rem;
    text-align: center;
    padding-left: 10%;
    min-width: 15rem;

    font-size: 0.975rem;
    line-height: 1.25rem;    
    justify-content: space-between;
    font-weight: 600; 
    
    &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-left: 1.5rem;
      }
         
  }
  
  
  button {       
    padding: 8px 16px; 
    background-color: ${(props) => props.theme['gray_200']};
    color: ${(props) => props.theme['white']};
       
    white-space: nowrap;
    padding: 1.5rem;
    width: 100%;
    
    border-top: 4px solid ${(props) => props.theme['bg_color']};

    font-size: 0.875rem;
    line-height: 1.25rem;    
    justify-content: space-between;
    
    border: none;
    border-top: 4px solid ${(props) => props.theme['bg_color']};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme['gray_300']};
        :focus {
          outline: none;
        }
      }
  }    

  div {
    padding: 12px 16px; 
    margin-left: 2rem;
    
    > p {
      margin-bottom: 0.05rem;
    }
  }



  & > tbody> button > td{
    min-width: 15.5rem;
  }
  `    



/* export const ButtonStyles = styled.button`
  align-items: center;
  width: 1.625rem;
  height: 1.625rem;

  background: transparent;
  cursor: pointer;
  border: none;
  border-radius: 4px;
` */



// RESPONSIVIDADE
//   @media (min-width: 768px) {
//     & > thead > tr > th:last-child,
//     & > tbody > tr > td:last-child {
//       display: table-cell;
//     }
//     & > tbody > tr > td:last-child {
//       padding-left: 0;
//       padding-right: 0;
//     }
//     & > tbody > tr > td:last-child button {
//       margin-left: 1rem;
//     }
//   }
// `;

/*& >  tbody > butr > td {
  background-color: ${(props) => props.theme['gray_200']};   
  white-space: nowrap;
  padding: 1.5rem;
  
  border-top: 4px solid ${(props) => props.theme['bg_color']};

  font-size: 0.875rem;
  line-height: 1.25rem;    
  justify-content: space-between;    
}  */

