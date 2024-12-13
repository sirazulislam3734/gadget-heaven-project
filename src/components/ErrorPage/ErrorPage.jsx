import { NavLink, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="container mx-auto text-center space-y-5 mt-20">
            <h2 className="text-4xl">Oops!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h2 className="text-3xl my-3">Page not found</h2>
                    <p className="text-xl my-2">Go back where you from</p>
                    <NavLink to="/" ><button className="py-3 rounded-xl px-8 border bg-purple-600 text-white">Home</button></NavLink>
                </div>
            }
        </div>
    );
};

export default ErrorPage;