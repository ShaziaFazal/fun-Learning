import React from "react";

function Badge(props) {
  return (
    <div className="py-1 px-4 w-fit bg-[#FE6784] border-gray-300 border-2 border-dashed rounded-full">
      <p className="text-white text-xl font-semibold">{props.title}</p>
    </div>
  );
}

export default Badge;
