export default function FooterComponent() {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content fixed bottom-0">
      <nav>
        <a className="link link-hover" href="/#">Anonymization Tool</a>
        <a className="link link-hover" href="/#">Data Search</a>
        <a className="link link-hover" href="/#">Data Types</a>
        <a className="link link-hover" href="/#">Events & News</a>
      </nav> 
      <nav>
        <a className="link link-hover" href="/#">About us</a>
        <a className="link link-hover" href="/#">Contact</a>
        <a className="link link-hover" href="/#">Open Source Contribution</a>
        <a className="link link-hover" href="/#">Privacy Policy</a>
      </nav> 
      <nav>
        <header className="footer-title">Social</header> 
        <div className="grid grid-flow-col gap-4">
          <a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
          <a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
          <a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
      </nav>
    </footer>
  )
}
