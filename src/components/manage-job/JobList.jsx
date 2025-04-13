import React, { useState } from 'react';
import SearchFilter from './SearchFilter';
import { Link } from 'react-router-dom';

const JobList = ({ jobs = [] }) => {
    const [searchJob, setSearchJob] = useState('');
    const [filterCategory, setFilterCategory] = useState(''); // State for the additional filter

    // Filter jobs based on search term and selected category
    const filteredJobs = jobs.filter((job) => {
        const matchesJobName = job.name.toLowerCase().includes(searchJob.toLowerCase());
        const matchesCategory = filterCategory
            ? job.locations.some((loc) => loc.name.toLowerCase() === filterCategory.toLowerCase())
            : true; // If no filter is selected, show all jobs
        return matchesJobName && matchesCategory;
    });

    // Extract unique categories (e.g., locations) for the filter dropdown
    const uniqueCategories = Array.from(
        new Set(jobs.flatMap((job) => job.locations.map((loc) => loc.name)))
    );

    return (
        <div className="job-list">
            <SearchFilter
                searchJob={searchJob}
                setSearchJob={setSearchJob}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
                categories={uniqueCategories}/>
            {/* Job List Header */}
            <div className="job-list-header">
                <p>Job Name</p>
                <p>Location</p>
                <p>Company</p>
                <p>Publication Date</p>
                <p>More Info</p>
                <p>Apply</p>
            </div>

            {/* Filtered Job List */}
            {filteredJobs.map((job) => (
                <div key={job.id} className="job-item">
                    
                    <h2>{job.name}</h2>
                    <p>{job.locations.map((loc) => loc.name).join(', ')}</p>
                    <p>{job.company.name}</p>
                    <p>{new Date(job.publication_date).toLocaleDateString()}</p>
                    <Link to={`/job/${job.id}`} className="more-info-link">
                        More Info
                    </Link>
                    <a
                        className="apply-link"
                        href={job.refs.landing_page}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Apply Now
                    </a>
                </div>
            ))}
        </div>
    );
};

export default JobList;