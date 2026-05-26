import React, { useState } from "react";
import Card from "./Card";

function JobListing() {
  const [jobsData, setJobsData] = useState([
    { id: 1, title: "Pool Cleaning", status: "Open" },
    { id: 2, title: "Pump Repair", status: "Completed" },
    { id: 3, title: "Filter Replacement", status: "In Progress" },
    { id: 4, title: "Leak Detection", status: "Open" },
    { id: 5, title: "Chemical Balancing", status: "Completed" },
    { id: 6, title: "Tile Scrubbing", status: "Pending" },
    { id: 7, title: "Vacuum Service", status: "Open" },
    { id: 8, title: "Heater Inspection", status: "Completed" },
    { id: 9, title: "Pump Installation", status: "In Progress" },
    { id: 10, title: "Pool Lighting Repair", status: "Pending" },
    { id: 11, title: "Water Testing", status: "Completed" },
    { id: 12, title: "Salt System Check", status: "Open" },
    { id: 13, title: "Skimmer Basket Cleaning", status: "Completed" },
    { id: 14, title: "Drain Cleaning", status: "In Progress" },
    { id: 15, title: "Pool Cover Installation", status: "Pending" },
    { id: 16, title: "Deck Pressure Wash", status: "Open" },
    { id: 17, title: "Chlorinator Repair", status: "Completed" },
    { id: 18, title: "Pool Inspection", status: "Pending" },
    { id: 19, title: "Algae Treatment", status: "In Progress" },
    { id: 20, title: "Pool Resurfacing", status: "Open" },
  ]);

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    status: "",
  });

  const [loading, setLoading] = useState(false);

  function deleteJob(id) {
    const newJob = jobsData.filter((job) => job.id !== id);
    setJobsData(newJob);
  }

  function validate() {
    let newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is Required";
    }

    if (!formData.status) {
      newErrors.status = "Status is Required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

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

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-10">
      {/* heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black text-gray-900">
          Job Management Dashboard
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Track, manage and organize all pool maintenance jobs
        </p>
      </div>

      {/* form */}
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[500px] bg-white/80 backdrop-blur-xl border border-gray-200 rounded-[32px] p-10 flex flex-col gap-7 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          {/* heading */}
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[4px] text-blue-500 font-semibold">
              Create Job
            </p>

            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Add New Task
            </h2>

            <p className="text-gray-500 text-sm">
              Organize and manage your pool service jobs easily.
            </p>
          </div>

          {/* title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Job Title
            </label>

            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              placeholder="Ex: Pool Cleaning"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg"
            />

            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* status */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">
              Job Status
            </label>

            <select
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value,
                })
              }
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-800 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white focus:shadow-lg"
            >
              <option value="">Select Status</option>
              <option value="Open">Open</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Pending">Pending</option>
            </select>

            {errors.status && (
              <p className="text-red-500 text-sm">{errors.status}</p>
            )}
          </div>

          {/* button */}
          <button
            disabled={loading}
            className="mt-2 bg-black text-white rounded-2xl py-4 font-semibold text-lg transition-all duration-300 hover:scale-[1.01] hover:bg-blue-600 hover:shadow-2xl cursor-pointer disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Job"}
          </button>
        </form>
      </div>

      {/* cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {jobsData.map((job) => (
          <div key={job.id}>
            <Card
              id={job.id}
              title={job.title}
              status={job.status}
              onDelete={deleteJob}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListing;
