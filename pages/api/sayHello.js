export default (req, res) => {
  const {
    query: { name }
  } = req;

  res.end(`Hello, ${name}`);
};
