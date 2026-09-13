class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0;
        }

        let MaxP = 0;
        let buy = 0;
        for (let i = 1; i <= prices.length; i++) {
            if (prices[buy] < prices[i]) {
                let profit = prices[i] - prices[buy];
                MaxP = Math.max(MaxP, profit);
            } else {
                buy = i;
            }
        }

        return MaxP;
    }
}
