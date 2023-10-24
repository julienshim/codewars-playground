function multiTable(number) {
  // good luck
  return Array.from(Array(10).keys())
    .map((i) => {
      const n = i + 1;
      return `${n} * ${number} = ${n * number}`;
    })
    .join("\n");
}
