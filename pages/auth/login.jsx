import Layout from "../../component/layout";

export default function Login(props) {
    return (
        <Layout title={process.env.appName + ' | Login'}>
            <div className="container">
                <h1 className="font-bold text-5xl text-blue-600"> Login </h1>
            </div>
        </Layout>
    );
}
