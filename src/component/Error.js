import { useRouteError, useRouteLoaderData } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>{error.status}</h1>
      <h1>!!!Oops</h1>
      <h2>Something went wrong!!!!!</h2>
      <h3>{error.statusText}</h3>
    </div>
  );
};
export default Error;
