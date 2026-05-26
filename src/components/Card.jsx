import { Trash2, Briefcase } from "lucide-react";
import React, { useState } from "react";

function Card(props) {
  const [status] = useState(props.status);

  const statusStyles = {
    Open: {
      bg: "bg-emerald-100",
      border: "border-emerald-300",
      dot: "bg-emerald-500",
      badge: "bg-emerald-200 text-emerald-900",
    },
    Completed: {
      bg: "bg-blue-100",
      border: "border-blue-300",
      dot: "bg-blue-500",
      badge: "bg-blue-200 text-blue-900",
    },
    "In Progress": {
      bg: "bg-violet-100",
      border: "border-violet-300",
      dot: "bg-violet-500",
      badge: "bg-violet-200 text-violet-900",
    },
    Pending: {
      bg: "bg-amber-100",
      border: "border-amber-300",
      dot: "bg-amber-500",
      badge: "bg-amber-200 text-amber-900",
    },
  };

  const currentStyle = statusStyles[status];

  return (
    <div
      className={`rounded-3xl border ${currentStyle.border} ${currentStyle.bg} p-6 w-[320px] min-h-[220px] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      {/* top */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-white shadow-md">
            <Briefcase className="text-gray-800" size={20} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[2px] text-gray-500">
              Job Task
            </p>

            <h1 className="text-xl font-bold text-gray-900 max-w-[170px] leading-snug">
              {props.title}
            </h1>
          </div>
        </div>

        <button
          onClick={() => props.onDelete(props.id)}
          className="p-2 rounded-xl bg-white hover:bg-red-100 transition-all duration-300 cursor-pointer shadow-sm"
        >
          <Trash2 size={18} className="text-gray-700 hover:text-red-500" />
        </button>
      </div>

      {/* bottom */}
      <div className="mt-14 flex items-center justify-between">
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${currentStyle.badge}`}
        >
          <div className={`w-3 h-3 rounded-full ${currentStyle.dot}`}></div>

          <span className="text-sm font-semibold">{status}</span>
        </div>

        <div className="text-right">
          <p className="text-gray-500 text-xs">Job ID</p>
          <p className="text-gray-900 font-bold">#{props.id}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
