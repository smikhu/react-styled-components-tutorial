import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <h1>Hello World</h1>
      </Container>
    </div>
  );
};

export default App;
