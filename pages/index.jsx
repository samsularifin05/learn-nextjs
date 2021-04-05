import Layout from "../component/Layout";

export default function index() {
  return (
    <Layout title={process.env.appName + ' | Home'}>
        <div className="container">
            <h1 className="font-bold text-5xl text-blue-600"> Home </h1>
        </div>
    </Layout>
  );
}

