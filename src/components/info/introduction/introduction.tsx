const IntroductionComponent = () => {
  return (
    <section className="flex flex-col h-full justify-center items-center text-center text-neutral-300">
      <div className="flex flex-col md:w-1/3 w-2/3 md:border md:rounded md:border-neutral-300 md:bg-black md:p-8 gap-3">
        <h1 className="text-3xl text-bold underline">Introduction</h1>
        <p className="md:text-base text-sm">
          I am an experienced web developer with an interest in transitioning to a career in QA.
        </p>
        <p className="md:text-base text-sm">
          My background includes JavaScript development, working with REST APIs and MySQL databases.
        </p>
        <p className="md:text-base text-sm">
          I've extensively tested features and bug fixes, while documenting the process using Jira, ClickUp, and Azure DevOps.
        </p>
      </div>
    </section>
  )
}

export default IntroductionComponent
