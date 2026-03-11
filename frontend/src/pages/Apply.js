import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import API from "../services/api"
import Swal from "sweetalert2"

function Apply(){

const [params] = useSearchParams()
const job_id = params.get("job_id")

const [form,setForm] = useState({
name:"",
email:"",
resume:""
})

const submit = async(e)=>{

e.preventDefault()

const name = form.name.trim()
const email = form.email.trim()
const resume = form.resume.trim()

if(name === "" || email === "" || resume === ""){
Swal.fire({
icon:"error",
title:"Missing Fields",
text:"Please fill all fields before submitting."
})
return
}

const confirm = await Swal.fire({
title:"Submit Application?",
text:"Do you want to submit this job application?",
icon:"question",
showCancelButton:true,
confirmButtonText:"Yes, Submit",
cancelButtonText:"Cancel",
confirmButtonColor:"#2563eb"
})

if(confirm.isConfirmed){

try{

await API.post("/apply",{
job_id:Number(job_id),
name,
email,
resume
})

Swal.fire({
icon:"success",
title:"Application Submitted!",
text:"Your application has been sent successfully."
})

setForm({
name:"",
email:"",
resume:""
})

}catch(error){

Swal.fire({
icon:"error",
title:"Error",
text:"Something went wrong while submitting."
})

}

}

}

return(

<div>

<h2>Apply Job</h2>

<form onSubmit={submit}>

<input
placeholder="Name"
value={form.name}
onChange={e=>setForm({...form,name:e.target.value})}
/>

<br/><br/>

<input
type="email"
placeholder="Email"
value={form.email}
onChange={e=>setForm({...form,email:e.target.value})}
/>

<br/><br/>

<input
placeholder="Resume Link"
value={form.resume}
onChange={e=>setForm({...form,resume:e.target.value})}
/>

<br/><br/>

<button className="submit-btn" type="submit">
Submit
</button>

</form>

</div>

)

}

export default Apply