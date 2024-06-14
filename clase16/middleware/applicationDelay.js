export const queryDelay = (req, res, next) => {
  const startOfTheRequest = Date.now();
  res.on('finish', () => {
    const finish = Date.now() - startOfTheRequest;
    console.log(`El tiempo que tardo en completarse fue de ${finish}`);
  });
  next();
};
