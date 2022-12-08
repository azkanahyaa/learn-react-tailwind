import NoteList from "./pages/NoteList";
import NoteSave from "./pages/NoteSave";
import NoteArchive from "./pages/NoteArchive";
import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import NoteDetail from "./pages/NoteDetail";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add" element={<NoteSave />} />
          <Route path="/archive" element={<NoteArchive />} />
          <Route path="/detail/:id" element={<NoteDetail />} />
          <Route path="/edit/:id" element={<NoteSave />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
