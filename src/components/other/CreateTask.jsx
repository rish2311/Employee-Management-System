import React from "react";

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form className="flex flex-wrap w-full items-start justify-between">
        {/* Left Column */}
        <div className="w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              type="text"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Employee Name</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              type="text"
              placeholder="Enter employee name"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              type="text"
              placeholder="Design, Dev, etc."
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1">Task Description</h3>
          <textarea className="w-full text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400 mb-4"></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-2 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
