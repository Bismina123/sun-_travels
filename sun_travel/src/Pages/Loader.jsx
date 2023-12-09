import styled from "styled-components";

export const Loader = () => {
  return (
    <Wrapper className="loaderss">
      <div className="loader">
        <div className="wait"></div>
        <div className="iata_code departure_city"></div>
        <div className="plane">
          <img
            src="https://zupimages.net/up/19/34/4820.gif"
            className="plane-img"
          />
        </div>
        <div className="earth-wrapper">
          <div className="earth"></div>
        </div>
        <div className="iata_code arrival_city"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 100vh;
  margin: 0 auto;
  z-index: 1000;
  background: #ffff;
  .wait {
    margin: 12rem 0;
  }
  .iata_code {
    font-size: 6rem;
    opacity: 0.3;
    top: 52%;
    position: absolute;
    color: #0099cc;
  }
  .departure_city {
    left: 0;
  }

  .arrival_city {
    right: 1.5rem;
  }

  .plane {
    position: absolute;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }

  .plane-img {
    -webkit-animation: spin 2.5s linear infinite;
    -moz-animation: spin 2.5s linear infinite;
    animation: spin 2.5s linear infinite;
  }

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .earth-wrapper {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }

  .earth {
    width: 160px;
    height: 160px;
    background: url("https://zupimages.net/up/19/34/6vlb.gif");
    border-radius: 100%;
    background-size: 340px;
    animation: earthAnim 12s infinite linear;
    margin: 0 auto;
    border: 1px solid #cdd1d3;
  }

  @keyframes earthAnim {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -340px;
    }
  }

  @media screen and (max-width: 420px) {
    .departure_city {
      left: 0;
      right: 0;
      top: 30%;
      position: absolute;
      margin: 0 auto;
    }

    .arrival_city {
      left: 0;
      right: 0;
      top: 93%;
      position: absolute;
      margin: 0 auto;
    }
  }
  /* width: 100%;
    height: 100vh;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    background: #18181b;
    display: flex !important ;
    justify-content: center !important ;
    align-items: center !important ; */

  .loaderss svg {
    width: 100%;
  }

  .loading-text {
    width: 100%;
    font-weight: bold;
    color: #fff;
    transform: translate(0.4rem);
    margin-top: 1rem;
  }
`;
