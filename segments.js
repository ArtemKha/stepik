
const number = 4
const segments = [[2, 5], [3, 6], [1, 2], [1, 3], [7, 9], [7, 34], [10, 23]]
const segments2 = [[1, 3], [2, 5], [3, 6]]

let params = data.toString().split("\n").slice(1, -1).map(item => {
    return item.split(' ').map(item => parseFloat(item))
});

function pointsCover(array) {
    if (array.length === 0) return null
    const sorted = sortSegments(array)
    const points = []
    let current = 0

    while (current < sorted.length) {
        const rightPoint = sorted[current][1]
        points.push(rightPoint)
        current = nextPoint(sorted, current)
    }

    return points
}

function nextPoint(sorted, current) {
    const segment = sorted[current]
    let next = current + 1

    //until it isn't false the segments are crossed
    while (next < sorted.length && isCrossed(segment, sorted[next])) {
        next++
    }

    return next
}

//isCrossed
//the right point of the first segment compares with the left point of the second one
function isCrossed(segment1, segment2) {
    return segment1[1] >= segment2[0]
}

function sortSegments(array) {
    return array.sort(compareSegments)
}

function compareSegments(a, b) {
    return a[1] - b[1]
}

const points = pointsCover(segments)

console.log(points.length)
console.log(...points)