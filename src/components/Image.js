import React from 'react';

const Image = ({ data }) => {
  return (
    <div>
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img
          className="h-72 w-full object-cover rounded-lg shadow-md"
          src={data.urls.small}
          alt={data.alt_description}
        />
      </a>
      <p className="mt-2 text-sm font-medium text-gray-600">Author: {data.user.name}</p>
      <p className="mt-2 text-sm font-medium text-gray-600">Username: {data.user.username}</p>
      <p className="mt-1 text-sm text-gray-500">Description: {data.alt_description}</p>
      <a
        className="mt-1 text-sm text-blue-500 hover:underline"
        href={data.links.html}
        target="_blank"
        rel="noreferrer"
      >
        View Original Picture on Unsplash
      </a>
    </div>
  );
};

export default Image;
