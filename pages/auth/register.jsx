import Layout from "../../component/layout";

export default function Register(props) {
    return (
        <Layout title={process.env.appName + ' | Register'}>
             <div className="container">
                <h1 className="font-bold text-5xl text-blue-600"> Register </h1>
            </div>
        </Layout>
    );
}
