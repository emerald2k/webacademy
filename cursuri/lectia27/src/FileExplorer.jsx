import { Routes, Route, useParams, BrowserRouter } from 'react-router';

function FileExplorer() {
  const { '*': path } = useParams(); // Get the wildcard path parameter from the URL

  const folders = path ? path.split('/') : []; // Split the path into an array of folder names

  return (
    <>
      <h1>File Explorer</h1>

      <p>Calea completă:</p>

      <strong>/fisiere/{path}</strong>

      <h2>Foldere:</h2>

      <ul>
        {/* // Render the list of folders as an unordered list */}
        {folders.length === 0 && <li>Nu există foldere</li>}
        {folders.length > 0 &&
          folders.map((folder, index) => <li key={index}>{folder}</li>)}
      </ul>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fisiere/*" element={<FileExplorer />} />
      </Routes>
    </BrowserRouter>
  );
}
