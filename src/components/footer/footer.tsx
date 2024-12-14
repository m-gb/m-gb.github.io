import './footer.css'

const FooterComponent = () => {
  const year = `${new Date().getFullYear()}`;
  return (
    <div className="py-3 text-center text-neutral-300">
      <span>Maya Goldberg &copy; 2017-{year}</span>
    </div>
  )
}

export default FooterComponent
