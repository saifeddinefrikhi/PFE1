import Link from "next/link"

const Nav = () => {
  return (
    
    <><ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
      <li className="nav-item">
        <Link href='/' className="nav-link active text-black">About Us</Link>
      </li>
      <li className="nav-item">
        <Link href='/' className="nav-link active text-black">Contact Us</Link>
      </li>
      <li className="nav-item">
        <Link href='/' className="nav-link active text-black">Portfolio</Link>
      </li>
    </ul><form class="d-flex" role="search">
        <Link href='/SignUp' class="btn btn-outline-success">Sign Up</Link>
      </form><div className="text-white">||</div><form class="d-flex" role="search">
        <Link href='/Login' class="btn btn-outline-success">Login</Link>
      </form></>
    )
}

export default Nav