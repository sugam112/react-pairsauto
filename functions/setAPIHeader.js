const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
};

exports.handler = async (event, _context) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
    };
  }

  return {
    statusCode: 200,
    headers: {
      CORS_HEADERS,
      "Content-Type": "application/xml; charset=utf-8",
    },
    body: {
      hello: "browser!",
    },
  };
};
