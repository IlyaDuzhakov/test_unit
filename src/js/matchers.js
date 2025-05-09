
export default function sortUsers(arr) {
    const sortedArr = arr.sort((a, b) => b.health - a.health)
    return sortedArr
}

