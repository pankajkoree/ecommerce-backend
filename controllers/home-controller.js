export const getStatus = (req, res) => {
  return res.json({
    status: 200,
    method: "GET",
  });
};
