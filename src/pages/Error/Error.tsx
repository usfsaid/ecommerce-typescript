import { Container } from "react-bootstrap";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

//style
import "./style.module.css";

const Error = () => {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 400;
    errorStatusText = "hello Oops! Page not found";
  }

  return (
    <Container>
      <div className="custom-bg text-dark">
        <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
          <div className="text-center">
            <h1 className="display-1 fw-bold">{errorStatus}</h1>
            <p className="fs-2 fw-medium mt-4">{errorStatusText}</p>
            <p className="mt-4 mb-5">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
              to="/"
              replace={true}
              className="btn btn-light fw-semibold rounded-pill px-4 py-2 custom-btn"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Error;
