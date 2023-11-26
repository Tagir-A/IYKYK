import React, { useState, useEffect } from "react";
import { Table, Pagination, Search } from "../components";

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        // Enrich data with a fake "age" field
        const enrichedData = data.map((user: any) => ({
          ...user,
          age: Math.floor(Math.random() * 50) + 18, // Generate a random age between 18 and 67
        }));
        setUsers(enrichedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Sorting
  const sortedUsers = currentUsers.sort((a, b) => {
    if (sortConfig.direction === "asc") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    } else if (sortConfig.direction === "desc") {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    }
    return 0;
  });

  // Search
  const filteredUsers = sortedUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (key: string) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  return (
    <div>
      <h2>User List Page</h2>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Table
        users={filteredUsers}
        onSort={handleSort}
        sortConfig={sortConfig}
        columns={["Name", "Email", "Age", "Actions"]}
      />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default UserListPage;
