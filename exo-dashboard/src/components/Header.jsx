import Link from "next/link"


const Header = ({pageTitle}) => {
  return (
    <header className="h-16 px-10 mb-8 flex flex-row items-center justify-between bg-blue-700 text-white ">
        <h1 className="text-4xl font-bold text-white">{pageTitle}</h1>
        <nav className="text-lg">
          <Link href="/">
            <a className="hover:bg-slate-500 hover:font-bold py-2 text-center w-24 mx-10">Journal</a>
          </Link>
          <Link href="/Add">
            <a className="hover:bg-slate-500 hover:font-bold py-2 text-center w-24">Ajouter</a>
          </Link>
        </nav>
      </header>
  )
}

export default Header