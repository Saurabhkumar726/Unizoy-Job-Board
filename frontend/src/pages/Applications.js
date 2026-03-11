import { useEffect, useState } from "react"
import API from "../services/api"
import Swal from "sweetalert2"

function Applications(){

const [applications,setApplications] = useState([])

useEffect(()=>{

API.get("/applications")
.then(res => setApplications(res.data))

},[])

const deleteApplication = async (id)=>{

const confirm = await Swal.fire({
title:"Delete Application?",
text:"This application will be permanently removed.",
icon:"warning",
showCancelButton:true,
confirmButtonText:"Yes, Delete",
confirmButtonColor:"#dc2626"
})

if(confirm.isConfirmed){

await API.delete(`/applications/${id}`)

Swal.fire({
icon:"success",
title:"Deleted!",
text:"Application removed successfully."
})

setApplications(applications.filter(app => app.id !== id))

}

}

return(

<div>

<h2>Job Applications</h2>

<table className="applications-table">

<thead>

<tr>
<th>ID</th>
<th>Job Title</th>
<th>Name</th>
<th>Email</th>
<th>Resume</th>
<th>Status</th>
<th>Applied On</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{applications.map(app => (

<tr key={app.id}>

<td>{app.id}</td>

<td>{app.job_title}</td>

<td>{app.name}</td>

<td>{app.email}</td>

<td>
<a href={app.resume} target="_blank" rel="noreferrer">
View Resume
</a>
</td>

<td>{app.status}</td>

<td>
{new Date(app.created_at).toLocaleDateString()}
</td>

<td>
<button
className="delete-btn"
onClick={()=>deleteApplication(app.id)}
>
Delete
</button>
</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default Applications