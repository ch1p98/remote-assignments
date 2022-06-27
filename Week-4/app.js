var twoSum = function (nums, target) {
  index = [];
  nums_dict = {};
  for (let i = 0; i < nums.length; i++) {
    console.log(nums_dict);
    if (nums_dict[nums[i]]) {
      index.push(nums_dict[nums[i]]);
      index.push(i);
      return index;
    } else {
      nums_dict[target - nums[i]] = i;
    }
  }
  return [0, -1];
};
