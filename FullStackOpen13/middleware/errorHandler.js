const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err.name === "likes err") res.status(404).send("Not found");
  else {
    if (err.name === "Validation isEmail on username failed")
      res.status(400).send("Validation isEmail on username failed");
    else res.status(404).send("Not found");
  }
};
