import React from 'react';
import {  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';


const SummaryStats = ({ jobs = [] }) => {
  const totalJobs = jobs.length;

  const locationCount = {};
  const categoryCount = {};

  jobs.forEach(job => {
    job.locations.forEach(loc => {
      const state = loc.name.split(",").pop().trim();
      locationCount[state] = (locationCount[state] || 0) + 1;
    });
    job.categories.forEach(cat => {
      categoryCount[cat.name] = (categoryCount[cat.name] || 0) + 1;
    });
  });

  const topLocation = Object.entries(locationCount).sort((a, b) => b[1] - a[1])[0];
  const topCategory = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0];

  const categoryData = Object.entries(categoryCount).map(([name, value]) => ({ name, value }));
  const locationData = Object.entries(locationCount).map(([name, value]) => ({ name, value }));

  if (jobs.length === 0) {
    return <div>Loading data for charts...</div>; // <-- Important!!
  }

  return (
    <>
    <div className="summary-container">
      <div className="summary-card">
        <h3>Total Jobs</h3>
        <p>{totalJobs}</p>
      </div>
      <div className="summary-card">
        <h3>Top Location</h3>
        <p>{topLocation ? topLocation[0] : 'N/A'}</p>
      </div>
      <div className="summary-card">
        <h3>Top Category</h3>
        <p>{topCategory ? topCategory[0] : 'N/A'}</p>
      </div>
    </div>
    <div className="summary-charts">
      <div className="charts-container" style={{ width: '100%', height: 400 }}>
        <h3>Job Locations Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={locationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" type='category'/>
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="charts-container" style={{ width: '100%', height: 400 }}>
        {/* Bar Chart for Locations */}
        <h3>Job Categories Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart layout="vertical" data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={120} />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    </>
  );
};

export default SummaryStats;
