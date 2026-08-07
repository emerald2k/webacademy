import { Routes, Route, useSearchParams, BrowserRouter } from 'react-router';

const lessons = [
  { id: 1, title: 'HTML Basic', category: 'frontend', level: 'incepator' },
  { id: 2, title: 'React State', category: 'frontend', level: 'mediu' },
  { id: 3, title: 'Laravel API', category: 'backend', level: 'avansat' },
];

function Lessons() {
  const [params, setParams] = useSearchParams(); // useSearchParams returns an array with the current search params and a function to update them
  console.log({ params: params.toString() }); // Log the current search params as a string

  const category = params.get('category') || 'toate';
  const level = params.get('level') || 'toate';

  const filtered = lessons.filter((lesson) => {
    const matchCategory = category === 'toate' || lesson.category === category;
    const matchLevel = level === 'toate' || lesson.level === level;

    return matchCategory && matchLevel;
  });

  function updateFilter(key, value) {
    const newParams = new URLSearchParams(params);
    newParams.set(key, value);
    setParams(newParams);
  }

  return (
    <>
      <h1>Lecții</h1>

      <select
        value={category}
        onChange={(event) => updateFilter('category', event.target.value)}
      >
        <option value="toate">Toate categoriile</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
      </select>

      <select
        value={level}
        onChange={(event) => updateFilter('level', event.target.value)}
      >
        <option value="toate">Toate nivelurile</option>
        <option value="incepator">Începător</option>
        <option value="mediu">Mediu</option>
        <option value="avansat">Avansat</option>
      </select>

      <ul>
        {filtered.map((lesson) => (
          <li key={lesson.id}>{lesson.title}</li>
        ))}
      </ul>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lessons />} />
        <Route path="/lectii" element={<Lessons />} />
        <Route path="/lectii/:customParam" element={<Lessons />} />
        <Route
          path="/lectii/:customParam/:anotherParam"
          element={<Lessons />}
        />
        <Route
          path="/lectii/:customParam/:anotherParam/:thirdParam"
          element={<Lessons />}
        />
      </Routes>
    </BrowserRouter>
  );
}
