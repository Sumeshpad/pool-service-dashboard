import React, { useState } from "react";

function Card(props) {
  const [status, setStatus] = useState(props.status);

  return (
    <div
      className={`${status === "Open" ? "bg-green-300" : "bg-tansparent"} flex flex-col flex-wrap p-8 border max-w-[370px] min-h-[200px]  `}
    >
      <h1>{props.title}</h1>
      <div className="flex flex-row gap-2  justify-center items-center">
        {status === "Completed" && (
          <div className=" w-3 h-3 bg-blue-700 rounded-full "></div>
        )}
        {status === "In Progress" && (
          <div className=" w-3 h-3 bg-green-700 rounded-full "></div>
        )}
        {status === "Pending" && (
          <div className=" w-3 h-3 bg-amber-700 rounded-full "></div>
        )}
        <h1>{props.status}</h1>
      </div>
    </div>
  );
}

export default Card;
