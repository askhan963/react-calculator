import Wrapper from "./components/Container";
import Screen from "./components/OutputScreen";
import ButtonBox from './components/AllButtonsBox'
import ButtonOperations from './components/ButtonOperations'
import CalcProvider from "./context/CalculateContext";
import Title from "./components/Title";
import Footer from "./components/Footer";
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <>
    <Title/>
    
    <CalcProvider>
      
      <Wrapper>
      
        <Screen />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <ButtonOperations
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
    <Footer/>
    </>
  );
}

export default App;
