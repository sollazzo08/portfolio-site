import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <div>
        <div>Logo</div>
        <div>
          <Link href="/">Home</Link>
        </div>
      </div>
    </nav>
  )
}
