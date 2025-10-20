export const getStatus = (req, res) => {
  try {
    return res.json({
      status: 200,
      method: req.method,
    });
  } catch (error) {
    return res.json({
      status: 400,
      error: error,
    });
  }
};

export const getHost = (req, res) => {
  try {
    return res.json({
      status: 200,
      host: req.host,
    });
  } catch (error) {
    return res.json({
      status: 400,
      error: error,
    });
  }
};

export const getPlatform = (req, res) => {
  try {
    return res.json({
      status: 200,
      platform: req.headers["sec-ch-ua-platform"],
    });
  } catch (error) {
    return res.json({
      status: 400,
      error: error,
    });
  }
};

export const getBrowserInfo = (req, res) => {
  try {
    return res.json({
      status: 200,
      browser: req.headers["sec-ch-ua"],
    });
  } catch (error) {
    return res.json({
      status: 400,
      error: error,
    });
  }
};

export const getUserAgent = (req, res) => {
  try {
    return res.json({
      status: 200,
      userAgent: req.headers["user-agent"],
    });
  } catch (error) {
    return res.json({
      status: 400,
      error: error,
    });
  }
};
