export const catchAsyncErrors = async (theFunction) => {
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch(error);
  };
};
