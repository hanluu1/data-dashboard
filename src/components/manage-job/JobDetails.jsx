import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = ({ jobs }) => {
  const { jobId } = useParams(); 

  const job = jobs.find((job) => String(job.id) === jobId);

  if (!job) {
    return <div>Job not found!</div>;
  }

  return (
    <div className="job-detail">
      <h2>{job.name}</h2>
      <h3>{job.company.name}</h3>
      <p><strong>Location:</strong> {job.locations.map((loc) => loc.name).join(', ')}</p>
      <p><strong>Publication Date:</strong> {job.publication_date}</p>
      <p><strong>Category:</strong> {job.categories.map((cat) => cat.name).join(', ')}</p>
      <div dangerouslySetInnerHTML={{ __html: job.contents }} /> {/* if you want full description */}
    </div>
  );
};

export default JobDetail;
