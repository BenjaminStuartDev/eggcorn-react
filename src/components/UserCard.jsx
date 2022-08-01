import React from "react";

function UserCard(user) {
    console.log(user)
  return (
    <li>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <img
          className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="font-medium text-lg leading-6 space-y-1">
          <h3>{user.user.name}</h3>
          <p className="text-indigo-600">{user.user.description}</p>
        </div>
      </div>
    </li>
  );
}

export default UserCard;
