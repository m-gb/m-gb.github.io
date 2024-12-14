const IntroductionComponent = () => {
  return (
    <section className="flex flex-col h-full justify-center items-center text-center text-neutral-300 gap-3 pt-3">
      <h1 className="text-3xl text-bold">Introduction</h1>
      <p className="md:w-1/3 md:text-base w-2/3 text-sm">
        I am an experienced web developer with an interest in transitioning to a career in QA. 
      </p>
      <p className="md:w-1/3 md:text-base w-2/3 text-sm">
        My background includes JavaScript development, working with REST APIs and MySQL databases.
      </p>
      <p className="md:w-1/3 md:text-base w-2/3 text-sm">
        I've extensively tested features and bug fixes, while documenting the process using Jira, ClickUp, and Azure DevOps.
      </p>
    </section>
  )
}

export default IntroductionComponent
