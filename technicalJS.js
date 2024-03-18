// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"


// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// * 1 <= strs.length <= 200
// * 0 <= strs[i].length <= 200
// * strs[i] consists of only lower-case English letters.

const dataList = [
    ["flower","flow","flight"],
    ["dog","racecar","car",'cat'],
    [],
    ["apple", "ape", "apricot"],
    ["banana", "band", "bangle"],
    ["cat", "can", "cap"],
    ["dog", "dodge", "dolphin"],
    ["elephant", "elevator", "elbow"],
    ["frog", "fridge", "friend"],
    ["guitar", "goat", "goldfish"],
    ["horse", "hockey", "house"],
    ["icecream", "island", "ink"],
    ["jacket", "jam", "jungle",'test']
  ]
  
  const longestPrefix = (data) => {
    console.log('Data set are ',data)
    // check data set is empty
    if (!data.length) {
        return "";
    }

    // get first val

    let val = data[0]
    console.log("🚀 ~ loggestPrefix ~ val:", val)

    let splitVal = val.split('')
    console.log("🚀 ~ loggestPrefix ~ splitVal:", splitVal)
    
    let prefixLongest = ''
    splitVal.forEach((itemVal,index) => {
        let match = data.every(str => itemVal === str[index])
        console.log("🚀 ~ splitVal.forEach ~ match:", match)

        if (match) {
            console.log("🚀 ~ splitVal.forEach ~ prefixLongest:", prefixLongest)
            prefixLongest = prefixLongest + itemVal  
            console.log("🚀 ~ splitVal.forEach ~ prefixLongest:", prefixLongest)
        } 
    });
   
    console.log('Longest prefix is ',prefixLongest)
    return prefixLongest
  }
  
  
  const main = () => {
      const result = dataList.map((item) => longestPrefix(item))
      console.log('result : ',result)
  }
  
  main()