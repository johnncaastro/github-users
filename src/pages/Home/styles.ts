import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    background-color: ${props => props.theme.colors.primary};

    h1 {
      font-size: 1.8rem;
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    gap: 2rem;
    padding-bottom: 10rem;

    background-color: ${props => props.theme.colors.secondary};

    form {
      label {
        display: block;
        font-size: 1rem;
      }

      input {
        max-width: 250px;
        height: 2rem;
        border: none;
        border-radius: 0.5rem;
        padding: 0.5rem;
        outline: none;

        font-size: 0.9rem;
        background-color: ${props => props.theme.colors.primary};

        &::placeholder {
          color: ${props => props.theme.colors.text};
        }
      }

      button {
        width: 2rem;
        height: 2rem;
        border: none;
        border-radius: 0.5rem;
        margin-left: 0.25rem;
        background-color: ${props => props.theme.colors.primary};

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  .switch-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    > span {
      font-size: 1rem;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    border: 2px solid black;
    border-radius: 0.5rem;
    padding: 2rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);

    > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    h2 {
      margin-top: 0.5rem;
      font-size: 1.4rem;
    }

    span {
      opacity: 0.8;
      font-size: 1rem;
    }

    p {
      margin-top: 1rem;
      font-size: 1rem;
    }
  }

  .followers {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 0.25rem;

    p {
      opacity: 0.8;
      font-size: 0.9rem;
    }
  }

  .location {
    display: flex;
    align-items: baseline;
    justify-content: center;

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 800px) {
    header {
      h1 {
        display: none;
      }
    }
    
    main {
      flex-direction: column;
      padding: 0 4rem;
    }
  }
`