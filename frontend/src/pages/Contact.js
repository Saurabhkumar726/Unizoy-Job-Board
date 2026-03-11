import { useState } from "react"
import Swal from "sweetalert2"

function Contact(){

const [form,setForm] = useState({
name:"",
email:"",
message:""
})

const submit = async (e)=>{

e.preventDefault()

const name = form.name.trim()
const email = form.email.trim()
const messageText = form.message.trim()

if(name === "" || email === "" || messageText === ""){

Swal.fire({
icon:"error",
title:"Missing Fields",
text:"Please fill all fields before sending the message."
})

return
}

const confirm = await Swal.fire({
title:"Send Message?",
text:"Do you want to send this message?",
icon:"question",
showCancelButton:true,
confirmButtonText:"Yes, Send",
cancelButtonText:"Cancel",
confirmButtonColor:"#16a34a"
})

if(confirm.isConfirmed){

Swal.fire({
icon:"success",
title:"Message Sent!",
text:"Your message has been sent successfully."
})

setForm({
name:"",
email:"",
message:""
})

}

}

return(

<div>

<h2>Contact Us</h2>

<form onSubmit={submit}>

<input
placeholder="Your Name"
value={form.name}
onChange={e=>setForm({...form,name:e.target.value})}
/>

<br/><br/>

<input
type="email"
placeholder="Your Email"
value={form.email}
onChange={e=>setForm({...form,email:e.target.value})}
/>

<br/><br/>

<textarea
placeholder="Your Message"
value={form.message}
onChange={e=>setForm({...form,message:e.target.value})}
/>

<br/><br/>

<button className="send-btn" type="submit">
Send Message
</button>

</form>

</div>

)

}

export default Contact