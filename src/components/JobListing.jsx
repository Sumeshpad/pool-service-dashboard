import React, { useState } from "react";
import Card from "./Card";

function JobListing() {
  const [jobsData, setJobsData] = useState([
    {
      id: 1,
      title: "Pool Cleaning",
      status: "Open",
    },
    {
      id: 2,
      title: "Pump Repair",
      status: "Completed",
    },
    {
      id: 3,
      title: "Filter Replacement",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Leak Detection",
      status: "Open",
    },
    {
      id: 5,
      title: "Chemical Balancing",
      status: "Completed",
    },
    {
      id: 6,
      title: "Tile Scrubbing",
      status: "Pending",
    },
    {
      id: 7,
      title: "Vacuum Service",
      status: "Open",
    },
    {
      id: 8,
      title: "Heater Inspection",
      status: "Completed",
    },
    {
      id: 9,
      title: "Pump Installation",
      status: "In Progress",
    },
    {
      id: 10,
      title: "Pool Lighting Repair",
      status: "Pending",
    },
    {
      id: 11,
      title: "Water Testing",
      status: "Completed",
    },
    {
      id: 12,
      title: "Salt System Check",
      status: "Open",
    },
    {
      id: 13,
      title: "Skimmer Basket Cleaning",
      status: "Completed",
    },
    {
      id: 14,
      title: "Drain Cleaning",
      status: "In Progress",
    },
    {
      id: 15,
      title: "Pool Cover Installation",
      status: "Pending",
    },
    {
      id: 16,
      title: "Deck Pressure Wash",
      status: "Open",
    },
    {
      id: 17,
      title: "Chlorinator Repair",
      status: "Completed",
    },
    {
      id: 18,
      title: "Pool Inspection",
      status: "Pending",
    },
    {
      id: 19,
      title: "Algae Treatment",
      status: "In Progress",
    },
    {
      id: 20,
      title: "Pool Resurfacing",
      status: "Open",
    },
  ]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ title: "", status: "" });

  function validate() {
    let newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "title isRequired";
    }
    if (!formData.status) {
      newErrors.status = "Status is Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    const newJob = {
      id: jobsData.length + 1,
      title: formData.title,
      status: formData.status,
    };
    setJobsData([...jobsData, newJob]);
    setFormData({
      title: "",
      status: "",
    });
  }

  return (
    <div>
      {/* card */}
      <form
        action=""
        onSubmit={handleSubmit}
        className="p-8  w-[50%] flex flex-col gap-4"
      >
        <input
          type="text"
          name="title"
          id=""
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
          placeholder="Title"
          className="px-4 py-3 border-2 border-gray-300 rounded-md text-base outline-none transition-colors duration-200 focus:border-blue-500"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className="px-4 py-3 border-2 border-gray-300 rounded-md text-base outline-none transition-colors duration-200 focus:border-blue-500"
        >
          <option value="Open">Open</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>
        {errors.status && <p className="text-red-500">{errors.status}</p>}

        <button className="p-4 bg-blue-950 rounded-2xl text-white hover:bg-blue-500 hover:cursor-pointer">
          Submit
        </button>
      </form>
      <div className="flex flex-row  gap-4 flex-wrap px-10 py-10">
        {jobsData.map((job) => (
          <div>
            <Card key={job.id} title={job.title} status={job.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListing;
