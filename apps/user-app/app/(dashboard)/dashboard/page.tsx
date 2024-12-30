import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white">
      <div className="w-full max-w-4xl p-8 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Payment Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">Total Balance</h2>
            <p className="text-4xl font-bold">$12,345.67</p>
          </div>
          {/* Card 2 */}
          <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">Transactions</h2>
            <p className="text-xl font-medium">View recent transactions</p>
          </div>
          {/* Card 3 */}
          <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">Invoices</h2>
            <p className="text-xl font-medium">Manage your invoices</p>
          </div>
          {/* Card 4 */}
          <div className="p-6 bg-white/20 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <p className="text-xl font-medium">Update your preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
