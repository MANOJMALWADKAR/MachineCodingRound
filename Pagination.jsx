import React, { useState } from "react";

const Data = Array.from({ length: 42 }, (_, i) => `Item ${i + 1}`);

function App() {
  const [currentpage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(Data.length / itemsPerPage);

  const startIndex = (currentpage - 1) * itemsPerPage;
  const currentItems = Data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <h1>Pagination</h1>

      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div>
        <button
          disabled={currentpage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              fontWeight: currentpage === page ? "bold" : "normal",
            }}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentpage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
