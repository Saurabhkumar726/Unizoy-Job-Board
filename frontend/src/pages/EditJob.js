import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import API from "../services/api"
import Swal from "sweetalert2"

function EditJob(){

const {id} = useParams()

const [job,setJob] = useState({
title:"",
description:"",
location:""
})

useEffect(()=>{

API.get("/jobs").then(res=>{
const found = res.data.find(j => j.id === Number(id))
if(found){
setJob(found)
}
})

},[id])

const submit = async (e)=>{

e.preventDefault()

const title = job.title.trim()
const description = job.description.trim()
const location = job.location.trim()

if(title === "" || description === "" || location === ""){

Swal.fire({
icon:"error",
title:"Missing Fields",
text:"Please fill all fields before updating."
})

return
}

const confirm = await Swal.fire({
title:"Update Job?",
text:"Do you want to update this job posting?",
icon:"question",
showCancelButton:true,
confirmButtonText:"Yes, Update",
cancelButtonText:"Cancel",
confirmButtonColor:"#16a34a"
})

if(confirm.isConfirmed){

try{

await API.put(`/jobs/${id}`,{
title,
description,
location
})

Swal.fire({
icon:"success",
title:"Job Updated!",
text:"The job has been updated successfully."
})

}catch(error){

Swal.fire({
icon:"error",
title:"Error",
text:"Something went wrong while updating the job."
})

}

}

}

return(

<div>

<h2>Edit Job</h2>

<form onSubmit={submit}>

<input
placeholder="Title"
value={job.title}
onChange={e=>setJob({...job,title:e.target.value})}
/>

<br/><br/>

<input
placeholder="Description"
value={job.description}
onChange={e=>setJob({...job,description:e.target.value})}
/>

<br/><br/>

<input
placeholder="Location"
value={job.location}
onChange={e=>setJob({...job,location:e.target.value})}
/>

<br/><br/>

<button className="update-btn" type="submit">
Update Job
</button>

</form>

</div>

)

}

export default EditJob