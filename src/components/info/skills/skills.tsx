const SkillsComponent = () => {
  const categories: string[] = [
    'Programming Languages',
    'Markup Languages',
    'Databases',
    'Project Management Tools',
    'Version Control Tools'
  ]
  const technologies: string[] = [
    'JavaScript, PHP, Ruby',
    'HTML, CSS',
    'MySQL, PostgreSQL',
    'Jira, ClickUp, Monday',
    'Azure DevOps, BitBucket, GitHub'
  ]
  const columns = categories.map((category, index) => {
    return <div className="flex flex-row justify-center gap-3" key={`${category}-${index}`}>
      <span className="base-1/2 w-full md:text-base text-sm text-right"><b>{category}</b></span>
      <span className="base-1/2 w-full md:text-base text-sm text-left">{technologies[index]}</span>
    </div>
  })

  return (
    <section className="flex flex-col h-full text-center text-neutral-300">
      <h3 className="text-3xl text-bold py-3">Skills</h3>
      <div className="flex flex-col align-center justify-center md:text-base text-sm">
        {columns}
      </div>
    </section>
  )
}

export default SkillsComponent
