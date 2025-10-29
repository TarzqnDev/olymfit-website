import Link from "next/link";

export default function DashboardPage(){
    return(
       <div>
            <header className="p-12">
                <div className="flex justify-between items-center">
                    <h1 className="">Olymfit</h1>
                    <ul className="flex gap-4">
                        <li>About Us</li>
                        <li>Events</li>
                        <li>Shop</li>
                        <li>Contents</li>
                    </ul>
                    <Link href="/auth/login">Login</Link>
                </div>
            </header>

            <main>

            </main>

            <footer>

            </footer>
       </div>
    )
}