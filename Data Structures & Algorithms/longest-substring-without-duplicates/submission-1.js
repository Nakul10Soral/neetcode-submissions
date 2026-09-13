class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) {
            return 0;
        }

        let hash = {};
        let left = 0;
        let longestseq = 0;
        for (let r = 0; r < s.length; r++) {
            if (hash[s[r]] !== undefined) {
                left = Math.max(hash[s[r]] + 1, left)
            }
            hash[s[r]] = r
            longestseq = Math.max(longestseq, r-left+1);
        }

        return longestseq
    }
}
