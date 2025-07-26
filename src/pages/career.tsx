interface TechStackItem {
  title: string; 
}

interface JobDescProps {
  company: string;
  duration: string;
  employeeType: string;
  desc: string;
  techstack: TechStackItem[];
}

function JobDescLayout({ company, duration, employeeType, desc, techstack }: JobDescProps){
  return(
    <div className="m-4">
      <h3 className="text-l font-bold">{company}</h3>
      <p className="text-sm font-semibold">{employeeType}</p>
      <p className="text-sm font-medium">{duration}</p>
      <p className="mt-2 text-sm ">{desc}</p>
      {techstack.map((item) => (
        <p className="max-w-7/10 mr-2 mt-2 text-xs font-semibold badge badge-neutral badge-outline">{item.title}</p>
      ))}
    </div>
  )
}

interface CareerProps {
}

const CareerPage: React.FC<CareerProps> = () => {
  return (
    <div id="career" className="flex flex-col">
        <div className='flex flex-row m-12 gap-4 pb-5'>
          <div className='walnut-brown-bg text-upright'>
            <p className="side-text-bar text-sm font-semibold">ADULTING PHASE</p>
          </div>
          <div className="walnut-brown-bg p-[1.675px] rounded-[2px]"></div>
          <div id="job"  className="">
              <h3 className="text-xl font-semibold mb-4">JOB(S)</h3>
              <JobDescLayout 
                company="Infineon Technologies Sdn Bhd"
                duration="February 2025 - Current"
                employeeType="INTERNAL STAFF"
                desc="Automation Developer."
                techstack = {[
                  {title:"HTML"},
                  {title:"JavaScript"},
                  {title:"CSS"},
                  {title:"Automic"},
                  {title:"React"},
                  {title:"Gitlab/Git"},
                  {title:"Infineon DDS"},
                ]}
              />
              <JobDescLayout 
                company="Infineon Technologies Sdn Bhd"
                duration="September 2022 - February 2025"
                employeeType="CONTRACT STAFF"
                desc="Primarily involved in Web and Mobile Development."
                techstack = {[
                  {title:"HTML"},
                  {title:"JavaScript"},
                  {title:"CSS"},
                  {title:"SAPUI5"},
                  {title:"Angular"},
                  {title:"Swift"},
                  {title:"Java"},
                  {title:"Spring Boot"},
                  {title:"Appium"},
                  {title:"ELK"},
                  {title:"Bitbucket/Git"},
                  {title:"HICP"},
                  {title:"Infineon DDS"},
                ]}
              />
          </div>
        </div>
        <div className='flex flex-row m-12 gap-4 pb-5'>
          <div className='walnut-brown-bg text-upright'>
            <p className="side-text-bar text-sm font-semibold">MEH, NOT FUN</p>
          </div>
          <div className="walnut-brown-bg p-[1.675px] rounded-[2px]"></div>
          <div id="internship"  className="">
            <h3 className="text-xl font-semibold mb-4">INTERNSHIP</h3>
            <JobDescLayout
              company="Honda Malaysia Sdn Bhd"
              duration="March 2022 - August 2022"
              employeeType="STUDENT INTERN"
              desc="Built a full-stack web application that assists 
                    the Quality sections' Engineer to monitor the progress 
                    of issued parts.

                    Assisted in supporting roles under the Admin Technician. 
                    Tasks ranging from reports (using Microsoft Excel) to minor 
                    office tasks (printing, lamination, etc)"
              techstack = {[
                {title:"Bootstrap"},
                {title:"HTML"},
                {title:"JavaScript"},
                {title:"CSS"},
                {title:"MySQL"},
              ]}
            />
          </div>
        </div>
    </div>
  )
}

export default CareerPage;