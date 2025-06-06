import React from "react";
import { UserCardProps } from "@/interfaces"; // Adjust path if necessary

const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  email,
  street,
  suite,
  city,
  zipcode,
}) => {
  return (
    <div className="flex flex-col justify-between bg-white shadow-md hover:shadow-lg p-6 border border-gray-200 rounded-lg transition-shadow duration-200">
      <div>
        <h2 className="mb-2 font-bold text-gray-800 text-xl">{name}</h2>
        <p className="mb-1 text-gray-600 text-sm">
          Email:{" "}
          <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
            {email}
          </a>
        </p>
        <p className="mb-4 text-gray-600 text-sm">User ID: {id}</p>

        <h3 className="mb-2 font-semibold text-gray-700 text-lg">Address:</h3>
        <p className="text-gray-700">
          {street}, {suite} <br />
          {city}, {zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;