import { useState } from "react"
import API from "../services/api"
import Swal from "sweetalert2"

function Admin(){

const [job,setJob] = useState({
title:"",
description:"",
location:""
})

const submit = async(e)=>{

e.preventDefault()

const title = job.title.trim()
const description = job.description.trim()
const location = job.location.trim()

if(title === "" || description === "" || location === ""){

Swal.fire({
icon:"error",
title:"Missing Fields",
text:"Please fill all fields before posting the job."
})

return
}

const confirm = await Swal.fire({
title:"Post Job?",
text:"Do you want to publish this job?",
icon:"question",
showCancelButton:true,
confirmButtonText:"Yes, Post",
cancelButtonText:"Cancel",
confirmButtonColor:"#2563eb"
})

if(confirm.isConfirmed){

try{

await API.post("/jobs",{
title,
description,
location
})

Swal.fire({
icon:"success",
title:"Job Posted!",
text:"The job has been successfully published."
})

setJob({
title:"",
description:"",
location:""
})

}catch(error){

Swal.fire({
icon:"error",
title:"Error",
text:"Something went wrong while posting the job."
})

}

}

}

return(

<div>

<h2>Post Job</h2>

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

<button className="post-btn" type="submit">
Post Job
</button>

</form>

</div>

)

}

export default Admin