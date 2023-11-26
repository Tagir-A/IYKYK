import React from "react";

interface TableProps {
  users: any[];
  onSort: (key: string) => void;
  sortConfig: { key: string; direction: string };
  columns: string[];
}

const Table: React.FC<TableProps> = ({
  users,
  onSort,
  sortConfig,
  columns,
}) => {
  const getCellValue = (user: any, column: string) => {
    // Handle special cases like sorting by 'Actions'
    // for now, just a placeholder
    if (column === "Actions") {
      return "Actions";
    }

    // Return the lowercased value for consistent comparison
    return String(user[column.toLowerCase()]);
  };

  const sortedUsers = [...users].sort((a, b) => {
    const aValue = getCellValue(a, sortConfig.key);
    const bValue = getCellValue(b, sortConfig.key);

    if (sortConfig.direction === "asc") {
      return aValue.localeCompare(bValue);
    } else if (sortConfig.direction === "desc") {
      return bValue.localeCompare(aValue);
    }

    return 0;
  });

  // Generate unique IDs for each column header
  const headerIds = columns.map((column) => `${column.toLowerCase()}-header`);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={column} id={headerIds[index]}>
              <button onClick={() => onSort(column)}>
                {column}{" "}
                {sortConfig.key === column &&
                  (sortConfig.direction === "asc" ? "▲" : "▼")}
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user, index) => (
          <tr key={user.id} aria-label={`user-row-${index}`}>
            {columns.map((column) => (
              <td key={column} headers={headerIds[index]}>
                {getCellValue(user, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
