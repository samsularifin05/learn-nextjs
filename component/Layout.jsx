import Head from "next/head";
import Navbar from "./navbar";
function Layout(prop) {
    return (
        <div>
            <Head>
                <title> {prop.title} </title>
            </Head>
            <Navbar/>
            <div className="mt-8">
                {prop.children}
            </div>
        </div>
    );
}

export default Layout;