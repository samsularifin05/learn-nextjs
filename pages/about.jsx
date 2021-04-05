import Layout from "../component/Layout";

export default function index() {
  return (
    <Layout title={process.env.appName + ' | About'}>
        <div className="container">
            <h1 className="font-bold text-5xl text-blue-600"> About </h1>
        </div>
    </Layout>
  );
}

