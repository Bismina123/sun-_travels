import styled from "styled-components";

export default function MHButton({ buttonName, className,onClick }) {
  return (
    <Wrapper className={className} onClick={onClick}>
      {/* <div className="buttonNow"> */}
        <button className="btn">
          <span>{buttonName}</span>
        </button>
      {/* </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .buttonNow {
    position: absolute;
    bottom: 15px;
    right: 25px;
  }
  .btn {
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: capitalize;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    background-color: #0b2f6a;
    padding: 7px 10px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  .btn span {
    position: relative;
    z-index: 1;
  }

  .btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: -5px;
    height: 490%;
    width: 140%;
    background: #ffc40d;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  .btn:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
`;
