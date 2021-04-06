import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Feed cat',
      day: 'Jan 4th at 14.30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Feed dog',
      day: 'Jan 5th at 14.30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Feed me',
      day: 'Jan 7th at 00.30',
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return <div className="container">
     <Header/>
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : "No tasks to show"}
  </div>;
}

export default App;
