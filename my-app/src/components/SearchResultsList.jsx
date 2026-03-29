function SearchResultsList({ results = [] }) {
  if (!results.length) {
    return <div className="search-result-empty">No clients found.</div>;
  }

  return (
    <div>
      {results.map((client, index) => (
        <div className="search-result-item" key={`${client.first_name}-${client.last_name}-${index}`}>
          {client.first_name} {client.last_name}
        </div>
      ))}
    </div>
  );
}

export default SearchResultsList

