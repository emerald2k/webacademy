import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  BrowserRouter,
} from 'react-router';

function ProjectLayout() {
  const { projectId } = useParams();

  return (
    <>
      <h1>Proiect #{projectId}</h1>
      <nav>
        <Link to=".">Prezentare</Link>
        {' | '}
        <Link to="taskuri">Taskuri</Link>
        {' | '}
        <Link to="setari">Setări</Link>
      </nav>
      <Outlet />
    </>
  );
}

function Overview() {
  return <h2>Prezentarea proiectului</h2>;
}

function Tasks() {
  return (
    <>
      <h2>Nu exista Taskuri</h2>
    </>
  );
}

function TaskDetails() {
  const { taskId } = useParams();

  return (
    <>
      <h2>Task #{taskId}</h2>
      <Link to={taskId}>Deschide taskul {taskId}</Link>
      <Link to=".." relative="path">
        Înapoi la taskuri
      </Link>
    </>
  );
}

function Settings() {
  return <h2>Setările proiectului</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/proiecte/:projectId" element={<ProjectLayout />}>
          <Route index element={<Overview />} />

          <Route path="taskuri">
            <Route index element={<Tasks />} />
            <Route path=":taskId" element={<TaskDetails />} />
          </Route>

          <Route path="setari" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
