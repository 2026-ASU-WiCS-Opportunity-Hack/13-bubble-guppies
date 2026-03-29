import { useNavigate } from 'react-router-dom';

function SearchResultsList({ results = [] }) {
  const navigate = useNavigate();

  if (!results.length) {
    return <div className="search-result-empty">No clients found.</div>;
  }

  return (
    <div>
      {results.map((client, index) => (
        <div className="search-result-item" key={client.client_id ?? `${client.first_name}-${client.last_name}-${index}`}
             onClick={() => navigate(`/client/view/${client.client_id}`)}
             style={{ cursor: 'pointer' }}
        >
          {client.first_name} {client.last_name}
        </div>
      ))}
    </div>
  );
}

export default SearchResultsList