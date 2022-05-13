/**
 * 真题描述： 
 * 给定一个整数数组 nums 和一个目标值 target，
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
****几乎所有的求和问题，都可以转化为求差问题****
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
*/
const twoSum = function (nums, target) {
    // 用对象来模拟map的能力
    const diffs = {}
    //缓存数组长度
    const len = nums.length
    //遍历数组
    for (let i = 0; i < len; i++) {
        //判断当前值对应的target差值是否存在（是否已经遍历过）
        if (diffs[target - nums[i]] !== undefined) {
            //若有对应差值，那么答案得到
            return [diffs[target - nums[i]], i]
        }
        //若没有对应差值，则记录当前值
        diffs[nums[i]] = i
    }
}
/**
 * map方法
*/
const twoSum1 = function (nums, target) {
    const map = new Map()
    const len = nums.length
    for (let i = 0; i < len; i++) { }
    if (map.has(target - nums[i])) {
        return [map.get(target - nums[i]), i]
    } else {
        map.set(nums[i], i)
    }
}


/**
 * 强大的双指针法
 * 合并两个有序数组
 * 真题描述：
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组
 * 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3
输出: [1,2,2,3,5,6]
*/

