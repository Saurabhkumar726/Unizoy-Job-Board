import { useEffect, useState } from "react"
import API from "../services/api"
import JobCard from "../components/JobCard"

function Home(){

const [jobs,setJobs] = useState([])
const [search,setSearch] = useState("")

useEffect(()=>{
API.get("/jobs")
.then(res => setJobs(res.data))
},[])

const filteredJobs = jobs.filter(job =>
job.title.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="home">

<h2 className="jobs-title">Available Jobs ({jobs.length})</h2>

<div className="search-bar">

<input
type="text"
placeholder="Search jobs..."
value={search}
onChange={e=>setSearch(e.target.value)}
/>

</div>

{filteredJobs.length === 0 ? (
<p className="no-jobs">No jobs found</p>
) : (

<div className="jobs-grid">

{filteredJobs.map(job => (
<JobCard key={job.id} job={job}/>
))}

</div>

)}

</div>

)

}

export default Home