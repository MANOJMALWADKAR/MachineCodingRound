import React from "react";

const Data = ["React", "Redux", "Javascript", "Typescript", "Nextjs", "Nodejs"];

function App() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    if (query === "") return;

    const timer = setTimeout(() => {
      const filtered = Data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );

      setResults(filtered);
    }, 600);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      <h1>Fiter with Debounce</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {results.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
