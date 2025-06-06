import React from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";
import { User, UserCardProps } from "../interfaces"; // Import User and UserCardProps interfaces

// Define the props for the UsersPage component
interface UsersPageProps {
  users: UserCardProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="mx-auto mt-4 p-4 container">
        <h1 className="mb-6 font-bold text-gray-800 text-3xl">Our Users</h1>

        {users.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">
            No users available.
          </p>
        ) : (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard
                key={user.id} // Important for list rendering in React
                id={user.id}
                name={user.name}
                email={user.email}
                street={user.street}
                suite={user.suite}
                city={user.city}
                zipcode={user.zipcode}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default UsersPage;