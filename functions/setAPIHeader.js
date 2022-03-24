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
      ...CORS_HEADERS,
    },
    body: JSON.stringify({
      hello: "browser!",
    }),
  };
};
