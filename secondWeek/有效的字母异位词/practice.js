// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 输入: s = "rat", t = "car"
// 输出: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//  1.先通过split将字符串转换为数组
//  2.再执行sort将数组进行排序
//  3.再把数组join转换为字符串
//  4.返回2个字符串的强对比
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};