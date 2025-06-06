import Link from "next/link";

const Header = () =>{
    return(
     <header className="bg-gray-800 shadow-md p-4 text-white">
      <nav className="flex justify-between items-center mx-auto container">
        <div className="font-bold text-xl">My App</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-gray-300">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/users" className="hover:text-gray-300">
              Users
            </Link>
          </li>
          <li>
            <Link href="/index" className="hover:text-gray-300">
              Index
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default Header