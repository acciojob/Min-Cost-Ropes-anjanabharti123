function mincost(arr)
{ 
//write your code here
// return the min cost
  // Use a min-heap approach with a priority queue
  arr.sort((a, b) => a - b); // Sort the array to simulate the min-heap
  
  let totalCost = 0;

  // Keep combining the two smallest ropes until only one rope remains
  while (arr.length > 1) {
    // Take the two smallest ropes
    const first = arr.shift();
    const second = arr.shift();

    // Calculate the cost to combine them
    const cost = first + second;
    totalCost += cost;

    // Add the combined rope back into the array and re-sort
    arr.push(cost);
    arr.sort((a, b) => a - b); // Re-sort after adding the combined rope
  }

  return totalCost;
}

module.exports=mincost;
