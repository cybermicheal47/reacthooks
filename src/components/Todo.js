import React, { useEffect, useState } from 'react';

function Todo() {
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        
        setTimeout(() => {
          setLoading(false);
          setTodo(data);
        }, 3000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <h3>{todo.title}</h3>
      )}
    </div>
  );
}

export default Todo;
