import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-lg md:text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-0 mt-8 text-gray-500">
      <Link href="/">
        <a className="hover:underline">← frouo.com</a>
      </Link>
    </h2>
  );
};

export default Header;
