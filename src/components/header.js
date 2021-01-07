const Header = () => (
  <header className='flex bg-yellow-400 bg-opacity-75 font-bold text-3xl px-4 py-2'>
    <svg data-src="https://s.svgbox.net/materialui.svg?ic=note" width="32" height="32" fill="currentColor" className='transform -rotate-90'></svg>
    <h1 className='ml-2'>Notes</h1>
  </header>
);

const Footer = () => (
  <footer className='font-medium text-center'>
    Made with ❤️ by Areh Tunde
  </footer>
);

export { Header, Footer };