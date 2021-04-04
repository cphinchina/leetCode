// 移动 零
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。
/**
 *  @param {nums[]} nums
 *  @return {void} do not return anything, modify nums in-place instead
 */

// 方法一
// 暴力计算0的个数，再在尾部填上计算的0
var moveZeroes = function (nums) {
  let countNum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      countNum++;
      nums.splice(i, 1);
      i--;
    }
  }
  for (let j = 0; j < countNum; j++) {
    nums.push(0);
  }
  return nums;
};

// 方法二 双指针
var moveZeroes = function (nums) {
  let j = 0; //指向 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      if (i != j) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++;
    }
  }
  return nums;
};
