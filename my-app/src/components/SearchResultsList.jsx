function SearchResults({ results }) {  // receive data as prop
  return (
    <div>
      {results.map((client, index) => (
        <div key={index}>
          {client.first_name} {client.last_name}
        </div>
      ))}
    </div>
  )
}

export default SearchResults

