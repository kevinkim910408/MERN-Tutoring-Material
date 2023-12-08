const CustomException = ({ code, msg }) => {
  const obj = {
    code,
    msg,
  };

  return obj;
};

const getStatusCode = {
  OK: {
    code: 200,
    msg: "OK. Request was successful.",
  },
  CREATED: {
    code: 201,
    msg: "Created. Resource was successfully created.",
  },
  BAD_REQUEST: {
    code: 400,
    msg: "Bad Request. Please check your request payload.",
  },
  UNAUTHORIZED: {
    code: 401,
    msg: "Unauthorized. Please provide valid authentication credentials.",
  },
  FORBIDDEN: {
    code: 403,
    msg: "Forbidden. You don't have permission to access this resource.",
  },
  NOT_FOUND: {
    code: 404,
    msg: "Not found.",
  },
  DUPLICATE_ID: {
    code: 409,
    msg: "The provided ID is already in use. Please choose a different one.",
  },
  VALIDATION_ERROR: {
    code: 422,
    msg: "Validation Error. Please check the input data for any errors.",
  },
  SERVER_ERROR: {
    code: 500,
    msg: "Internal Server Error. Please try again later.",
  },
};

module.exports = { CustomException, getStatusCode };
