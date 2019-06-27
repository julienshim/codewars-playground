function getSize(width, height, depth) {
 const volume = width * height * depth;
 const area = 2 * (width * height + height * depth + width * depth);
 return [area, volume]
}
