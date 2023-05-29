import './App.css';
import { Header } from "./components/Header/Header.jsx";
//import { EntrySection } from "./components/EntrySection/index.jsx";
import { EntryForm } from "./components/EntryForm/EntryForm.jsx";
//import { MainSection } from "./components/MainSection/index.jsx";
import { TabBar } from "./components/TabBar/TabBar.jsx";
import { EntryList } from "./components/EntryList/EntryList.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

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
