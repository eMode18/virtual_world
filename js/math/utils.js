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

function add(p1, p2) {
  return new Point(p1.x + p2.x, p1.y + p2.y);
}

function subtract(p1, p2) {
  return new Point(p1.x - p2.x, p1.y - p2.y);
}
