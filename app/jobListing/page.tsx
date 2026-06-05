"use client";

import { useEffect, useState } from "react";
import "./styles.css";

// interface JobInterface {
//   id: number;
//   title: string;
//   description: string;
//   position: string;
//   salary: number;
//   company: string;
// }

const jobs = [
  {
    id: 1,
    title: "Full-Stack",
    description:
      "Our client is looking for a self driven full-stack developer whom takes responsibility of their work, and takes pride in their work.",
    position: "Java engineer",
    salary: 48000,
    company: "Apple",
    location: "Cape Town",
    contract: "permanent",
  },

  {
    id: 2,
    title: "Frontend Dev",
    description:
      "Our client is looking for a self driven full-stack developer whom takes responsibility of their work, and takes pride in their work.",
    position: "web dev",
    salary: 48000,
    company: "google",
    location: "JHB",
    contract: "remote",
  },
  {
    id: 3,
    title: "Dev-Ops",
    description:
      "Our client is looking for a self driven full-stack developer whom takes responsibility of their work, and takes pride in their work.",
    position: "Backend Developer",
    salary: 48000,
    company: "GitHub",
    location: "Bloem",
    contract: "contract",
  },
  {
    id: 4,
    title: "Ui Ux dev",
    description:
      "Our client is looking for a self driven full-stack developer whom takes responsibility of their work, and takes pride in their work.",
    position: "frontend developer",
    salary: 48000,
    company: "Whatsapp",
    location: "PTA",
    contract: "permanent",
  },
  {
    id: 5,
    title: "PHP Dev",
    description:
      "Our client is looking for a self driven full-stack developer whom takes responsibility of their work, and takes pride in their work.",
    position: "Drag and drop dev",
    salary: 48000,
    company: "WordPress",
    location: "Stellenboch",
    contract: "full-time",
  },
  {
    id: 6,
    title: "Full-Stack",
    description:
      "Our client is looking for a self driven full-stack developer whom takes responsibility of their work, and takes pride in their work.",
    position: "Senior Dev",
    salary: 48000,
    company: "Well Book",
    location: "Remote",
    contract: "remote",
  },
];

export default function page() {
  const [findJob, setFindJob] = useState("");

  const filterJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(findJob.toLowerCase()) ||
      job.company.toLowerCase().includes(findJob.toLowerCase()) ||
      job.position.toLowerCase().includes(findJob.toLowerCase()) ||
      job.location.toLowerCase().includes(findJob) ||
      job.contract.toLowerCase().includes(findJob),
  );

  return (
    <div className="jobListContainer">
      {/* Search */}
      <div className="searchHeader">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          fill="currentColor"
          className="bi bi-geo-fill"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"
          />
        </svg>
        <input
          type="text"
          value={findJob}
          onChange={(e) => setFindJob(e.target.value)}
          placeholder="Position, location, title...."
          className="jobListInpStl"
        />
      </div>
      <div className="jobBSidedCon">
        <div className="jobBodyGrid">
          <div className="jobFilterSidebar">
            <p>Filter</p>
            <div className="jbListSideBarItems">
              <input type="radio" value="full-time" />
              Full Time
            </div>
            <div className="jbListSideBarItems">
              <input type="radio" value="full-time" />
              Contract
            </div>
            <div className="jbListSideBarItems">
              <input type="radio" value="full-time" />
              Remote
            </div>
            <div className="jbListSideBarItems">
              <input type="radio" value="full-time" />
              Hybrid
            </div>
            <div className="jbListSideBarItems">
              <input type="radio" value="full-time" />
              In office
            </div>
          </div>
          {filterJobs.map((job) => (
            <div key={job.id} className="listOfJobCard">
              <h1 className="jobListTitle">{job.title}</h1>
              <h2> {job.company}</h2>
              <p>{job.description}</p>
              <div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-file-post-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M4.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m0 2h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5" />
                  </svg>
                  {job.position}
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cash-stack"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                    <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z" />
                  </svg>
                  R{job.salary}
                </p>
              </div>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
                {job.location}
              </p>
              <p>{job.contract}</p>
              <p>view jobs</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
