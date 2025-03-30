import { useState } from 'react';
import Navbar from './Components/Navbar';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setTodo(todos[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleAddOrUpdate = () => {
    if (todo.trim() !== '') {
      if (isEditing) {
        const updatedTodos = todos.map((item, index) => 
          index === editIndex ? todo : item
        );
        setTodos(updatedTodos);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setTodos([...todos, todo]);
      }
      setTodo('');
    }
  };

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-5 p-6 bg-gradient-to-br from-violet-200 to-violet-100 rounded-2xl shadow-2xl'>
        <div className='addTodo flex flex-col gap-4 p-6 bg-white rounded-xl shadow-lg'>
          <h1 className='text-4xl font-bold text-center text-violet-900'>Your Todo List</h1>
          <div className='flex gap-4 items-center'>
            <input 
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
              type="text" 
              className='w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-violet-500 text-lg' 
              placeholder='Enter your todo...'
            />
            <button 
              onClick={handleAddOrUpdate}
              className={`px-6 py-3 rounded-xl transition-all duration-300 shadow-lg text-lg font-semibold ${isEditing ? 'bg-green-700 hover:bg-green-800' : 'bg-violet-700 hover:bg-violet-800'} text-white`}>
              {isEditing ? 'Update' : 'Add'}
            </button>
          </div>
        </div>

        <h2 className='text-2xl font-semibold mt-8 text-gray-800 text-center'>Your Todos</h2>
        <div className='todos mt-6 p-4 bg-white rounded-xl shadow-lg min-h-[100px]'>
          {todos.length === 0 ? (
            <p className="text-center text-gray-500 text-lg">No todos yet. Add some!</p>
          ) : (
            todos.map((item, index) => (
              <div key={index} className='todo flex justify-between items-center bg-gray-100 p-4 my-3 rounded-xl shadow-md'>
                <span className='text-gray-800 text-lg font-medium'>{item}</span>
                <div className='buttons flex gap-2'>
                  <button 
                    onClick={() => handleEdit(index)}
                    className='bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition-all shadow-md'>
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(index)}
                    className='bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-all shadow-md'>
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
