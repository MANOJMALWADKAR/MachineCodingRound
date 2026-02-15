import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 5;

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      isLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Failed to Fetch users", err);
    } finally {
      isLoading(false);
    }
  }

  const totalPages = Math.ceil(users.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentUsers = users.slice(startIndex, endIndex);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h2>API List With Pagination</h2>

      <h3>User List </h3>

      <ul>
        {currentUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button key={p} onClick={() => setCurrentPage(p)}>
            {p}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
