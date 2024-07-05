import Link from "next/link"
export default function Page () {
    return (
        <>
            <div className="page">Product Page</div>
            <Link key="new" href="/dashboard/products/new">New</Link>
        </>
    )
}