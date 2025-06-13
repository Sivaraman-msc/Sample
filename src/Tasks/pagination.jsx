export default function Pagination({ totalItems, itemsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return (
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => onPageChange(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    );
  }
  