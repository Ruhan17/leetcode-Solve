function gcd(a, b) {
    if (b == 0)
        return a;
    return gcd(b, a % b);
}

function lcm(a, b){
    return (a / gcd(a, b)) * b;
}

function replaceNonCoprimes(nums){
    let ans = []
    ans.push(nums[0])
    for(let i = 1; i < nums.length; i++){
        let num = nums[i]
        while(ans.length !== 0 && gcd(ans[ans.length - 1], num) > 1){
            num = lcm(ans[ans.length - 1], num)
            ans.pop()
        }
        ans.push(num)
    }
    return ans
}

console.log(replaceNonCoprimes([6,4,3,2,7,6,2]))