import React from "react";
import { useNavigate } from "react-router-dom";
const ProjectCard = ({
  name,
  description,
  _id
}) => {

  const navigate = useNavigate();

  return (
    <div class="rounded-2xl my-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
      <div class="block rounded-xl bg-white p-6 sm:p-8" onClick={() => navigate(`/projects/${_id}`)}>
        <div class="mt-16 sm:pr-8">
          <h3 class="text-xl font-bold text-gray-900">{name}</h3>

          <p class="mt-2 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
