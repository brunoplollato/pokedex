import Link from "next/link";

export default function Breadcrumb({ last }: any) {
  return (
    <nav className="rounded-md w-full">
      <ol className="list-reset flex">
        <li className="text-blue-600 hover:text-blue-700"><Link href="/">Home</Link></li>
        <li><span className="text-gray-500 mx-2">/</span></li>
        <li className="text-gray-500">{last}</li>
      </ol>
    </nav>
  )
};