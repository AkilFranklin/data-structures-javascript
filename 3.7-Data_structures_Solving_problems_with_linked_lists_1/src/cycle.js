const cycle = (list) => {
    if (!list.head) {
        return false;
    }

    if (!list.head.next) {
        return false;
    }

    let left = list.head;
    let right = list.head.next;

    while (left.next) {
        if (left === right) {
            return true;
        } else {
            if (!right.next.next) {
                return false;
            }
            left = left.next;
            right = right.next.next;
        }
    }

    return false;
};

module.exports = cycle;
