import Link from "next/link";
function Navbar() {
  return (
    <div className="bg-blue-500">
      <div className="container">
        <div className="flex item-center justify-between">
          <div className="flex item-center py-5 px-3">
            <Link href="/">
              <a className="text-white uppercase font-sembiold tracking-tighter">
                {process.env.appName}
              </a>
            </Link>
          </div>
          <div className="flex item-center">
            <Link href="/about">
              <a className="text-blue-200 hover:text-white py-5 px-3">
                {" "}
                About{" "}
              </a>
            </Link>
            <Link href="/login">
              <a className="text-blue-200 hover:text-white py-5 px-3">
                {" "}
                login{" "}
              </a>
            </Link>
            <Link href="/register">
              <a className="text-blue-200 hover:text-white py-5 px-3">
                {" "}
                register{" "}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
