import styled from "styled-components"

export const FormWrapper = styled.form`
  width: 600px;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border-radius: ${({theme}) => theme.$borderRadius.$primary};

  display: flex;
  flex-direction: column;

  border: 1px solid #3b4a5a;
  color: ${({theme}) => theme.$textColors.$primary};
  background-color: ${({theme}) => theme.$backgroundColors.$primary};
  box-shadow: ${({theme}) => theme.$boxShadows.$primary};

  header {
    margin: 0.7rem auto;
    font-size: ${({theme}) => theme.$fontsSize.$h2};
  }

  .fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    & > * {
      width: 100%;
      margin: 0.5rem 0;
      border-radius: ${({theme}) => theme.$borderRadius.$secondary};
    }

    textarea, input, select {
      background-color: ${({theme}) => theme.$backgroundColors.$secondary};
      outline: none;
      color: ${({theme}) => theme.$textColors.$primary};
      border: 1px solid ${({theme}) => theme.$borderColors.$primary};
    }

    textarea {
      display: block;
      width: 100%;
      max-width: 100%;
      min-width: 100%;
      height: 5rem;
      min-height: 5rem;
      max-height: 15rem;
      padding: 0.5rem;
    }

    fieldset {
      display: flex;
      justify-content: space-between;

      label {
        margin-right: 0.5rem;
      }

      input {
        height: 1.5rem;
      }
    }

    button {
      background-color: ${({theme}) => theme.$backgroundColors.$secondary};
      color: ${({theme}) => theme.$textColors.$primary};
      border-color: ${({theme}) => theme.$borderColors.$primary};
      width: 12rem;
      margin: 0.5rem auto;
      height: 1.8rem;
      
      cursor: pointer;
      
      &:hover {
        background-color: ${({theme}) => theme.$textColors.$primary};
        color: ${({theme}) => theme.$backgroundColors.$secondary};
      }
    }
    
    .error {
      margin: 0.5rem 0 0;
      color: ${({theme}) => theme.$textColors.$error};
    }
  }
`
