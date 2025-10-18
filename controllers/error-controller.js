const pageNotFound = (req, res) => {
  return res.json({
    error: "invalid url",
    status: 400,
  });
};

export default pageNotFound;
