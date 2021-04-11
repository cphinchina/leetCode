// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 输入：nums = [3,3], target = 6
// 输出：[0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 思路一 双层遍历
// 思路二  利用hashMap查找

var twoSum = function(nums, target) {
    let result = []
    for(var firstIndex = 0; firstIndex < nums.length ; firstIndex++){
        if (result.length) break
        for(var secondIndex = firstIndex+1 ; secondIndex < nums.length ; secondIndex++){
            if(firstIndex == secondIndex) continue
            if(nums[firstIndex] + nums[secondIndex] === target){
                result = [firstIndex, secondIndex]
                break
            }
        }
    }
    return result
};

var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i]
    if (map.has(targetNum)) {
      return [map.get(targetNum), i]
    }
    map.set(nums[i], i)
  }
  return []
}