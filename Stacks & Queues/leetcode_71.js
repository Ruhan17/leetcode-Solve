function simplifyPath(path){
    let ans = "/"
    let folderName = ""
    let stack = []
    let j = null
    for(let i = 0; i < path.length; i++){
        if(path[i] !== "/"){
            j = i + 1
            folderName = path[i]
            while(j < path.length && path[j] !== "/"){
                folderName += path[j]
                j++
            }
            if(folderName === ".."){
                stack.pop()
            }
            else if(folderName !== "."){
                stack.push(folderName)
            }
            folderName = ""
            i = j - 1
        }
    }
    for(let i = 0; i < stack.length; i++){
        ans += stack[i]
        if(i !== stack.length - 1) ans += "/"
    }
    return ans
}

console.log(simplifyPath("/..hidden"))