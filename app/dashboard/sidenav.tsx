"use client"
import Image from "next/image";
import a from '../images/a.png';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
    const pathname = usePathname();

    return (
        <div style={{background : "red"}}>
            hey, from side nav
            <Image
                src={a}
                height={500}
                width={500}
                alt="Alternate Pic"
            />
            <Link key="dashboard" href="/dashboard" className={pathname === "/dashboard" ? "bg-sky-100 text-blue-600" : ""}>Dashboard</Link>
            <br />
            <hr />
            <Link key="Home" href="/" className={pathname === "/" ? "bg-sky-100 text-blue-600" : ""}>Home</Link>
            <br />
            <Link key="products" href="/dashboard/products" className={pathname === "/dashboard/products" ? "bg-sky-100 text-blue-600" : ""} >Products</Link>
            <br />
            <Link key="customers" href="/dashboard/customers" className={pathname === "/dashboard/customers" ? "bg-sky-100 text-blue-600" : ""}>Customers</Link>
        </div>
    );
}
