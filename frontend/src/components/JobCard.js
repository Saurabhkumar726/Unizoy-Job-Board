import { Link } from "react-router-dom"
import API from "../services/api"
import Swal from "sweetalert2"

function JobCard({job}){

const deleteJob = async () => {

const result = await Swal.fire({
title: "Delete Job?",
text: "Are you sure you want to delete this job?",
icon: "warning",
showCancelButton: true,
confirmButtonColor: "#dc2626",
cancelButtonColor: "#2563eb",
confirmButtonText: "Yes, Delete"
})

if(result.isConfirmed){

await API.delete(`/jobs/${job.id}`)

Swal.fire({
icon: "success",
title: "Deleted!",
text: "The job has been removed."
})

setTimeout(()=>{
window.location.reload()
},1000)

}

}

return(

<div className="job-card">

<h3 className="job-title">{job.title}</h3>

<p className="job-location">
📍 {job.location}
</p>

<p className="job-date">
Posted: {new Date(job.created_at).toLocaleDateString()}
</p>

<p className="job-desc">
{job.description}
</p>

<div className="job-buttons">

<Link to={`/apply?job_id=${job.id}`}>
<button className="apply-btn">Apply</button>
</Link>

<Link to={`/edit/${job.id}`}>
<button className="edit-btn">Edit</button>
</Link>

<button className="delete-btn" onClick={deleteJob}>
Delete
</button>

</div>

</div>

)

}

export default JobCard