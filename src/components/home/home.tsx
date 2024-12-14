import './home.css'
import ParticleComponent from './particle/particle'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeComponent = () => {
  return (
    <section id="home" className="bg-home">
      <ParticleComponent />
      <div className="flex flex-col h-full text-neutral-300">
        <div className="basis-1/4">
          {/* Placeholder */}
        </div>
        <div className="basis-2/4 flex flex-col justify-center items-center font-lora unselectable">
            <h1 className="text-4xl font-bold">Maya Goldberg</h1>
            <span className="text-xl">QA Engineer | Developer</span>
        </div>
        <div className="basis-1/4 absolute bottom-0 inset-x-0 py-3">
          <div className="flex flex-row">
            <div className="basis-1/3 flex justify-start items-center">
              <HashLink to="/#info" className="px-3"><FontAwesomeIcon icon={['fas', 'id-card']} size="xl" /></HashLink>
              <HashLink to="/#experience" className="px-3"><FontAwesomeIcon icon={['fas', 'briefcase']} size="xl" /></HashLink>
            </div>
            <div className="basis-1/3 flex justify-center items-center">
              <HashLink to="/#info"><FontAwesomeIcon icon={['fas', 'angles-down']} size="2xl" /></HashLink>
            </div>
            <div className="basis-1/3 flex justify-end items-center">
              <HashLink to="https://github.com/m-gb"><FontAwesomeIcon icon={['fab', 'github']} size="xl" /></HashLink>
              <HashLink to="https://www.linkedin.com/in/maya-goldberg-528689150" className="px-3"><FontAwesomeIcon icon={['fab', 'linkedin']} size="xl" /></HashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeComponent
