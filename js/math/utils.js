function getNearestPoint(loc, points, threshold = Number.MAX_SAFE_INTEGER) {
  let minDistance = Number.MAX_SAFE_INTEGER;
  let nearestPoint = null;

  for (const point of points) {
    const distance = setDistance(point, loc);
    if (distance < minDistance && distance < threshold) {
      minDistance = distance;
      nearestPoint = point;
    }
  }
  return nearestPoint;
}

function setDistance(point1, point2) {
  return Math.hypot(point1.x - point2.x, point1.y - point2.y);
}
