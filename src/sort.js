export function sort(tab) {
    const numerics = tab.filter(item => typeof item === 'number');
    const nonNumerics = tab.filter(item => typeof item !== 'number');
    const sorted = numerics.slice().sort((a, b) => a - b);
    return sorted.concat(nonNumerics);
  }