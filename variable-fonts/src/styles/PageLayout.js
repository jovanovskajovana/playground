import styled, { keyframes } from 'styled-components'

const activeNavPointer = keyframes`
  0% {
		opacity: 1;
		transform: scale(1);
	}
	80% {
		transform: scale(1.3);
	}
	100% {
		opacity: 0;
		transform: scale(1.3);
	}
`

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  height: 100vh;
  overflow: hidden;
`

const Navigation = styled.nav`
  display: flex;
  align-self: flex-end;
  padding: 2rem;

  a {
    padding: 0 0.5rem;
  }

  span {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #fff;

    &:after {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      border: 2px solid #fff;
      border-radius: 50%;
      animation: 1.2s ${activeNavPointer} infinite;
      display: none;
    }
  }

  .active span {
    background-color: #6a7482;

    &:after {
      display: block;     
    }  
  }
`

const TextLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 80px);
`

export { PageLayout, Navigation, TextLayout }
