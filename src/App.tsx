import MainContent from "./components/MainContent";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import "./AppStyle";
//import { greet } from "./utils/greet";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <MainContent />
      <PageFooter />
    </>
  );
}

export default App;
