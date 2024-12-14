import './info.css'
import IntroductionComponent from './introduction/introduction'
import SkillsComponent from './skills/skills'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoComponent = () => {
  return (
    <section id="info" className="bg-info flex flex-col h-full">
      <div className="basis-1/2 h-full">
        <IntroductionComponent />
      </div>
      <div className="basis-1/2 h-full">
        <SkillsComponent />
      </div>
      <div className="text-white py-3">
        <div className="flex flex-row">
          <div className="basis-1/3 flex justify-start items-center">
            {/* <HashLink to="/#home" className="px-3"><FontAwesomeIcon icon={['fas', 'house']} size="xl" /></HashLink>
            <HashLink to="/#experience" className="px-3"><FontAwesomeIcon icon={['fas', 'briefcase']} size="xl" /></HashLink> */}
          </div>
          <div className="basis-1/3 flex justify-center items-center">
            <HashLink to="/#experience"><FontAwesomeIcon icon={['fas', 'angles-down']} size="2xl" /></HashLink>
          </div>
          <div className="basis-1/3 flex justify-end items-center">
            {/* <HashLink to="https://github.com/m-gb"><FontAwesomeIcon icon={['fab', 'github']} size="xl" /></HashLink>
            <HashLink to="https://www.linkedin.com/in/maya-goldberg-528689150" className="px-3"><FontAwesomeIcon icon={['fab', 'linkedin']} size="xl" /></HashLink> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoComponent
