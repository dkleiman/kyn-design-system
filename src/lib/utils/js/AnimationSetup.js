const getStepFunction = ({
  totalAnimationTime = 400,
  intervalLength = 1,
  easingFunction = () => {},
}, callback) => {
  let start = null;
  return (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    let progressPercentage = progress / totalAnimationTime;
    progressPercentage *= easingFunction(progressPercentage);
    callback(intervalLength * progressPercentage);
  };
};

export default getStepFunction;
