const Queue = require("../queue/queue");

/**
 * Implement a Parking Lot.
 *
 */
class ParkingLot {
  constructor(capacity, rate) {
    this.spaces = new Array(capacity).fill("vacant");
    this.rate = rate;
    this.revenue = 0;
    this.queue = new Queue();
  }

  /**
   * Returns the number of vacant parking spaces
   * @returns {Number}
   *  the total number of spaces where the value is "vacant".
   */

  get vacantSpaces() {
    return this.spaces.reduce(
      (sum, space, index) => sum + (space === "vacant" ? 1 : 0),
      0
    );
  }

  /**
   * As cars enter the parking lot, the license plate number is entered
   * and the car is parked in the first vacant space.
   * If the lot is full, the car is added to the queue to be parked when a spot is available.
   *
   * @param licensePlateNumber
   *  the license plate number of the car entering
   */
  enter(licensePlateNumber) {
    if (this.vacantSpaces > 0) {
      for (let i = 0; i < this.spaces.length; i++) {
        if (this.spaces[i] === "vacant") {
          this.spaces[i] = licensePlateNumber;
          break;
        }
      }
    } else {
      return this.queue.enqueue(licensePlateNumber);
    }
  }

  /**
   * As a car leaves the parking lot, or the queue, the leave method is called
   * with the license plate number of the car leaving.
   * @param licensePlateNumber
   *    *  the license plate number of the car leaving.
   */
  leave(licensePlateNumber) {
    // check if car is in lot already
    for (let i = 0; i < this.spaces.length; i++) {
      if (this.spaces[i] === licensePlateNumber) {
        if (!this.queue.isEmpty()) {
          const enteringCar = this.queue.dequeue();
          this.spaces[i] = enteringCar;
        } else {
          this.spaces[i] = "vacant";
        }
        this.revenue += this.rate;
        return;
      }
    }
    // check if car is in queue
    if (this.queue.first) {
      let leftCar = this.queue.first;
      let rightCar = this.queue.first.next;
      if (leftCar.value == licensePlateNumber) {
        this.queue.dequeue();
      } else {
        while (rightCar) {
          if (rightCar.value === licensePlateNumber) {
            leftCar.next = rightCar.next;
            rightCar = null;
            return;
          }
          leftCar = rightCar;
          rightCar = leftCar.next;
        }
      }
    }
  }

  /**
   * Lists each space in the parking lot along with the license plate number of the car parked there, or
   * "vacant" as the license plate if the spot is vacant.
   * @returns {{licensePlateNumber: string, space: Number}[]}
   */
  get occupants() {
    return this.spaces.map((licensePlateNumber, index) => ({
      space: index + 1,
      licensePlateNumber,
    }));
  }

  /**
   * The total cumulative revenue for the parking lot.
   * The parking rate is paid when the car leaves, it does not matter how long the car stays in the spot.
   * @returns {number}
   *  the total revenue for the parking lot.
   */
  get totalRevenue() {
    return this.revenue;
  }
}

module.exports = ParkingLot;
