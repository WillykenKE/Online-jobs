import React from 'react';

function MainContent() {
  return (
    <div className="main">
      <div className="content">
        <div className="header">
          <h4>Job results <span>150</span></h4>
          <p>Job matching your skills</p>
        </div>
        <div className="job-cards">
          <JobCard
            company="Apple"
            time="Just now"
            position="Senior Programmer"
            location="San Francisco, USA"
            tags={["Remote", "Freelance"]}
            description="We are looking for a professional senior programmer with a decade of experience to join our apple team, swift language is a must. Join our team today and be part of our developers, contribute to innovative design projects, ai intergration and so much more."
          />
          <JobCard
            company="Microsoft"
            time="Just now"
            position="Junior Programmer"
            location="Seattle, USA"
            tags={["Full time"]}
            description="Microsoft is looking for a professional senior programmer with a decade of experience to join our apple team, swift language is a must."
          />
          <JobCard
            company="Google"
            time="Just now"
            position="Senior Data Scientist"
            location="Los Angeles, USA"
            tags={["Remote", "Freelance"]}
            description="We are looking for a professional senior programmer with a decade of experience to join our apple team, swift language is a must."
          />
          <JobCard
            company="Facebook"
            time="Just now"
            position="Senior Programmer"
            location="Tampa, USA"
            tags={["Remote", "Freelance"]}
            description="We are looking for a professional senior programmer with a decade of experience to join our apple team, swift language is a must."
          />
          <JobCard
            company="YouTube"
            time="Just today"
            position="Senior Programmer"
            location="San Francisco, USA"
            tags={["Remote", "Freelance"]}
            description="We are looking for a professional senior programmer with a decade of experience to join our apple team, swift language is a must."
          />
          <JobCard
            company="Amazon"
            time="Just today"
            position="Senior Programmer"
            location="Allentown, USA"
            tags={["Remote", "Freelance"]}
            description="We are looking for a professional senior programmer with a decade of experience to join our apple team, swift language is a must."
          />
        </div>
      </div>
      <div className="filters">
        <Filter />
      </div>
    </div>
  );
}

const JobCard = ({ company, time, position, location, tags, description }) => (
  <div className="card">
    <div className="card-header">
      <div className="job-info">
        <i className={`bx bxl-${company.toLowerCase()}`}></i>
        <div>
          <h5>{company} <span>| {time}</span></h5>
          <a href="/">{position}</a>
          <p>{location}</p>
        </div>
      </div>
      <i className='bx bx-bookmark-plus'></i>
    </div>
    <div>
      <div className="card-tags">
        {tags.map(tag => <a key={tag} href="/">{tag}</a>)}
      </div>
      <div className="card-desc">{description}</div>
    </div>
  </div>
);

const Filter = () => (
  <>
    <div className="header">
      <h3>Job Filter</h3>
      <a href="/">Clear all</a>
    </div>
    <FilterItem title="Time" options={[{ name: "Just Now", count: 50 }, { name: "Weekly", count: 150 }, { name: "Monthly", count: 200 }]} />
    <FilterItem title="Experience" options={[{ name: "Entry", count: 50 }, { name: "Junior", count: 100 }, { name: "Middle", count: 100 }, { name: "Senior", count: 50 }]} />
    <FilterItem title="Job type" options={[{ name: "Full Time", count: 100 }, { name: "Part Time", count: 150 }, { name: "Contract", count: 50 }]} />
    <div className="item">
      <div className="title">
        <h4>Job Location</h4>
        <a href="/">Clear</a>
      </div>
      <div className="checkbox">
        <div>
          <input type="checkbox" name="onsite" />
          <label htmlFor="onsite">On Site</label>
        </div>
        <p>100 Jobs</p>
      </div>
      <div className="location">
        <i className='bx bx-location-plus'></i>
        <input type="text" placeholder="Search Location" />
      </div>
      <div className="checkbox">
        <div>
          <input type="checkbox" name="remote" />
          <label htmlFor="remote">Remote</label>
        </div>
        <p>150 Jobs</p>
      </div>
    </div>
  </>
);

const FilterItem = ({ title, options }) => (
  <div className="item">
    <div className="title">
      <h4>{title}</h4>
      <a href="/">Clear</a>
    </div>
    {options.map(option => (
      <div key={option.name} className="checkbox">
        <div>
          <input type="checkbox" name={option.name.toLowerCase().replace(' ', '')} />
          <label htmlFor={option.name.toLowerCase().replace(' ', '')}>{option.name}</label>
        </div>
        <p>{option.count} Jobs</p>
      </div>
    ))}
  </div>
);

export default MainContent;
