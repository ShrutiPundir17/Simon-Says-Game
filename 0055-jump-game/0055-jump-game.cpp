class Solution {
public:
    bool canJump(vector<int>& nums) {
     int far = 0;
        for (int i = 0; i < nums.size(); ++i) {
            if (far < i) return false; 
            far = max(far, i + nums[i]);
        }
        return true;     
    }
};