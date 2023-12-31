import React, { useState, useEffect } from "react";
import { Table, Pagination, Search } from "../components";
import Modal from "../components/Modal";
import { User } from "../types/User";
import { useNavigate } from "react-router-dom";

const generateProfilePicture = (userId: number): string => {
  return `https://i.pravatar.cc/150?u=${userId}`; // Using pravatar.cc as a placeholder image generator
};

const UserListPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
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
          profilePicture: generateProfilePicture(user.id), // generate random picture URL
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
    const key = sortConfig.key as keyof User;
    if (sortConfig.direction === "asc") {
      return a[key] > b[key] ? 1 : -1;
    } else if (sortConfig.direction === "desc") {
      return a[key] < b[key] ? 1 : -1;
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

  const handleUserClick = (user: User) => {
    navigate(`/user-details/${user.id}`, { state: { user } });
  };

  return (
    <div>
      <h2>User List Page</h2>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Table
        users={filteredUsers}
        onSort={handleSort}
        onUserClick={handleUserClick}
        sortConfig={sortConfig}
        columns={["Name", "Email", "Age", "Actions"]}
      />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <>hello</>
      </Modal>
    </div>
  );
};

export default UserListPage;
