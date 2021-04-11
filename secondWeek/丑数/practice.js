// 编写一个程序，找出第 n 个丑数。

// 丑数就是质因数只包含 2, 3, 5 的正整数。

// 输入: n = 10
// 输出: 12
// 解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  // 3指针：除n=1外，dp[i] = Math.min(dp[a]*2, dp[b]*3,dp[c]*5)
  let p2 = (p3 = p5 = 1);
  const dp = Array(n + 1); // 下标0的选项不用
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    // PS: 三个if是并列关系，不是互斥关系，在于会有重合的情况，如丑数6 = 丑数2*3，也 = 丑数3*2
    if (dp[i] === dp[p2] * 2) p2++;
    if (dp[i] === dp[p3] * 3) p3++;
    if (dp[i] === dp[p5] * 5) p5++;
  }
  return dp[n]
};