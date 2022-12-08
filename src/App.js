import NoteList from "./pages/NoteList";
import NoteAdd from "./pages/NoteAdd";
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
          <Route path="/add" element={<NoteAdd />} />
          <Route path="/archive" element={<NoteArchive />} />
          <Route path="/detail/:id" element={<NoteDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
