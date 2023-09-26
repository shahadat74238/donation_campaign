import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-2">
      <h1 className="text-5xl font-bold">404</h1>
      <h1 className="text-5xl font-bold">Data Not Found</h1>
      <h2 className="text-3xl font-semibold">Go Back Home Page</h2>
      <Link to="/">
        <button className="py-2 px-4 bg-black text-white rounded-md">
          Home Page
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
