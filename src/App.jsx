import './App.css';
import { Header } from "./components/Header/index.jsx";
//import { EntrySection } from "./components/EntrySection/index.jsx";
import { EntryForm } from "./components/EntryForm/index.jsx";
//import { MainSection } from "./components/MainSection/index.jsx";
import { TabBar } from "./components/TabBar/index.jsx";
import { EntryList } from "./components/EntryList/index.jsx";
import { Footer } from "./components/Footer/index.jsx";

function App() {
  
  return (
    <>
      <Header />
      <EntryForm />
      <TabBar />
      <EntryList />
      <Footer />
    </>
  );
}

export default App;
