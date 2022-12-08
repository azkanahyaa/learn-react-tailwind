import NoteList from "./pages/NoteList";
import NoteAdd from "./pages/NoteAdd";
import NoteArchive from "./pages/NoteArchive";
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add" element={<NoteAdd />} />
          <Route path="/archive" element={<NoteArchive />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
