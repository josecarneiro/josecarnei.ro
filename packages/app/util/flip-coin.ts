const flipCoin = (probability: number = 0.5): boolean =>
  Math.random() < probability;

export default flipCoin;
