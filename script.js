let jobs = JSON.parse(localStorage.getItem("jobs")) || [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    description: "Looking for HTML, CSS, JavaScript developer"
  }
];
localStorage.setItem("jobs", JSON.stringify(jobs));

/* FEATURED JOBS */
if (document.getElementById("featuredJobs")) {
  featuredJobs.innerHTML = jobs.map(j =>
    `<div class="job-card">
      <h3>${j.title}</h3>
      <p>${j.company} - ${j.location}</p>
    </div>`
  ).join("");
}

/* JOB LIST */
if (document.getElementById("jobList")) renderJobs(jobs);

function renderJobs(data) {
  jobList.innerHTML = data.map(j =>
    `<div class="job-card">
      <h3>${j.title}</h3>
      <p>${j.company} - ${j.location}</p>
      <a href="job.html?id=${j.id}">View Details</a>
    </div>`
  ).join("");
}

/* SEARCH */
function searchJobs() {
  let q = search.value.toLowerCase();
  renderJobs(jobs.filter(j => j.title.toLowerCase().includes(q)));
}

/* JOB DETAILS */
if (location.search.includes("id")) {
  let id = new URLSearchParams(location.search).get("id");
  let job = jobs.find(j => j.id == id);
  jobDetails.innerHTML = `
    <h2>${job.title}</h2>
    <p><b>${job.company}</b> - ${job.location}</p>
    <p>${job.description}</p>
  `;
}

/* LOGIN */
function login(e) {
  e.preventDefault();
  localStorage.setItem("user", email.value);
  alert("Login successful");
  location.href = "dashboard.html";
}

/* POST JOB */
function postJob() {
  jobs.push({
    id: Date.now(),
    title: title.value,
    company: company.value,
    location: location.value,
    description: description.value
  });
  localStorage.setItem("jobs", JSON.stringify(jobs));
  alert("Job Posted Successfully");
}

/* APPLY JOB */
function applyJob(e) {
  e.preventDefault();
  alert("✅ Application submitted. Email notification sent!");
}
