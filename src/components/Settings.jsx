import React from "react";
 
const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Settings</h2>
        <form>
          {/* Example setting: Dark Mode */}
          <div className="mb-4">
            <label className="block text-gray-700">Dark Mode</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>
 
          {/* Example setting: Notifications */}
          <div className="mb-4">
            <label className="block text-gray-700">Notifications</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
              <option>On</option>
              <option>Off</option>
            </select>
          </div>
 
          {/* Example setting: Privacy */}
          <div className="mb-4">
            <label className="block text-gray-700">Privacy</label>
            <select className="w-full mt-1 p-2 border border-gray-300 rounded-md">
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
 
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
};
 
export default Settings;
 