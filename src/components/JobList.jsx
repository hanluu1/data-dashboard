const JobList = ({ jobs=[] }) => {
    return (
        <div className="job-list">
        {jobs.map((job) => (
            <div key={job.id} className="job-item">
            <h2>{job.name}</h2>
            <p>{job.locations.map(loc => loc.name).join(', ')}</p>
            <p>{job.company.name}</p>
            <p>{new Date(job.publication_date).toLocaleDateString()}</p>
            <a href={job.refs.landing_page} target="_blank" rel="noopener noreferrer">Apply Now</a>
            </div>
        ))}
        </div>
    );
    };
export default JobList;