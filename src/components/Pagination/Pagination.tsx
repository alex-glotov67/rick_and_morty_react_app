import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  pages: number;
}

export const Pagination: React.FC<Props> = ({ pages }) => {
  const totalPages: number[] = [];

  for (let i = 0; i < pages; i += 1) {
    totalPages.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <NavLink className="page-link" to="#">
            Previous
          </NavLink>
        </li>
        {totalPages.map(page => (
          <li key={page}>
            <NavLink to="">
              {page}
            </NavLink>
          </li>
        ))}
        <li className="page-item">
          <NavLink className="page-link" to="#">
            Next
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
