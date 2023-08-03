const sortedIPs: string[] = ipAddresses.sort((a: string, b: string) => {
  const partsA: number[] = a.split(".").map((part) => parseInt(part, 10));
  const partsB: number[] = b.split(".").map((part) => parseInt(part, 10));
  for (let i = 0; i < 4; i++) {
    const partA: number = partsA[i];
    const partB: number = partsB[i];
    if (partA !== partB) {
      return partA - partB;
    }
  }
  return 0;
});
