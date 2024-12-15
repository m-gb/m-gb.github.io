import FooterComponent from '../footer/footer'
import './experience.css'

const ExperienceComponent = () => {
  const years: string[] = [
    '2018-2019',
    '2019-2020',
    '2022-2024'
  ]
  const locations: string[] = [
    'Berlin, Germany',
    'Haifa, Israel',
    'Karmiel, Israel'
  ]
  const titles: string[] = [
    'Junior Fullstack Developer',
    'Fullstack Developer',
    'Frontend Developer'
  ]
  const companies: string[] = [
    'Cognita AG',
    'B-com',
    'Smart Printing Solutions'
  ]
  const descriptions_pt1: string[] = [
    'Developed web interfaces using React & Ruby on Rails',
    'Developed web interfaces and REST APIs using Angular & PHP Laravel',
    'Developed responsive web interfaces using Angular & Material',
  ]
  const descriptions_pt2: string[] = [
    'Implemented unit and integration tests using RSpec',
    'Maintained a PHP Laravel code base using complex REST APIs & MySQL databases',
    'Worked closely with the QA, UX and Product Management teams in an Agile environment'
  ]
  const descriptions_pt3: string[] = [
    '',
    'Worked in an Agile environment using Jira and documented features in Confluence',
    'Manually tested on different browsers and devices, documented on ClickUp & Azure DevOps'
  ]
  const columns = companies.map((company, index) => {
    return <div className="flex flex-col justify-center pb-5" key={`${company}-${index}`}>
      <span className="w-full md:text-base text-sm md:text-left"><b>{titles[index]}</b> <i>{years[index]}</i></span>
      <span className="w-full md:text-base text-sm md:text-left"><b>{company}</b> <i>{locations[index]}</i></span>
      <ul className="list-disc md:pl-5">
        <li className="w-full md:text-base text-sm md:text-left">{descriptions_pt1[index]}</li>
        <li className="w-full md:text-base text-sm md:text-left">{descriptions_pt2[index]}</li>
        {(descriptions_pt3[index]) ? <li className="w-full md:text-base text-sm md:text-left">{descriptions_pt3[index]}</li> : <span></span> }
      </ul>
    </div >
  })

  return (
    <section id="experience" className="bg-experience items-center flex flex-col h-full">
      <div className="flex flex-col h-full md:w-1/3 w-2/3 justify-center text-center text-neutral-300">
        <div className="flex flex-col md:text-base text-sm md:border md:rounded md:border-neutral-300 md:bg-black md:p-8 gap-3">
          <h3 className="text-3xl text-bold py-3 underline">Work Experience</h3>
          {columns}
        </div>
      </div>
      <FooterComponent />
    </section>
  )
}

export default ExperienceComponent
