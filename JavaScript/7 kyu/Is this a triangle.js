function isTriangle(a,b,c)
{
   [x, y, z] = [a, b, c].sort()
   return x + y > z
}
