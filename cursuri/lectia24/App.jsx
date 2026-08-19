import { useState } from 'react';
import './style.css';
import App1_Counter from './components/App1_Counter';
import App2_ControlledInput from './components/App2_ControlledInput';
import App3_AuthForm from './components/App3_AuthForm';
import App4_ProductList from './components/App4_ProductList';
import App5_ProductCRUD from './components/App5_ProductCRUD';
import App6_PromoCampaign from './components/App6_PromoCampaign';

const exercises = [
  { id: 'app1', label: '1. Counter & Lifecycle', component: <App1_Counter /> },
  { id: 'app2', label: '2. Controlled Input', component: <App2_ControlledInput /> },
  { id: 'app3', label: '3. Formular Auth', component: <App3_AuthForm /> },
  { id: 'app4', label: '4. Listă Imutabilă', component: <App4_ProductList /> },
  { id: 'app5', label: '5. Administrare CRUD', component: <App5_ProductCRUD /> },
  { id: 'app6', label: '6. Campanie Jetoane', component: <App6_PromoCampaign /> },
];

/**
 * Lecția 24: Arhitectură de Stare, Hooks & Management de Date în React
 * Hub interactiv ce reunește toate exercițiile practice din lecție.
 */
export default function App() {
  const [activeTab, setActiveTab] = useState('app6');

  const currentExercise = exercises.find((ex) => ex.id === activeTab) || exercises[0];

  return (
    <div className="app">
      <header style={{ marginBottom: '24px' }}>
        <h1>⚛️ Lecția 24: State Patterns & React Architecture</h1>
        <p className="subtitlu">
          Colecție modulară de exerciții practice: Formulare, Imutabilitate, Hooks și aplicații CRUD.
        </p>

        <nav className="tabs-nav">
          {exercises.map((ex) => (
            <button
              key={ex.id}
              className={`tab-btn ${activeTab === ex.id ? 'active' : ''}`}
              onClick={() => setActiveTab(ex.id)}
            >
              {ex.label}
            </button>
          ))}
        </nav>
      </header>

      <main>{currentExercise.component}</main>
    </div>
  );
}
