function intersection(a, b) {
    let map = new Map();
    let set = new Set();

    for (let i = 0; i < a.length; i++) {
        map.set(a[i], i);
    }

    b.forEach((element) => {
        if (map.has(element)) {
            set.add(element)
        }
    })

    return [...set];
}

module.exports = intersection;
