function status(req, response) {
  response.status(200).json({ res: "isso é a uma response" });
}

export default status;
