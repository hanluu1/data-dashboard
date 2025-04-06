import React from 'react';

const SummaryStats = ({ jobs = [] }) => {
  // 1️⃣ Total number of jobs
  const totalJobs = jobs.length;

  // 2️⃣ Most common location
  const locationCount = {};
  jobs.forEach(job => {
    job.locations.forEach(loc => {
      const state = loc.name.split(",").pop();
      locationCount[state] = (locationCount[state] || 0) + 1;
    });
  });
  const topLocation = Object.entries(locationCount).sort((a, b) => b[1] - a[1])[0];

  // 3️⃣ Most common category
  const categoryCount = {};
  jobs.forEach(job => {
    job.categories.forEach(cat => {
      categoryCount[cat.name] = (categoryCount[cat.name] || 0) + 1;
    });
  });
  const topCategory = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="summary-container">
      <div className="summary-card">
        <h3>Total Jobs</h3>
        <p>{totalJobs}</p>
      </div>
      <div className="summary-card">
        <h3>Top Location State</h3>
        <p>{topLocation ? `${topLocation[0]} (${topLocation[1]} jobs)` : 'N/A'}</p>
      </div>
      <div className="summary-card">
        <h3>Top Category</h3>
        <p>{topCategory ? `${topCategory[0]} (${topCategory[1]} jobs)` : 'N/A'}</p>
      </div>
    </div>
  );
};

export default SummaryStats;
