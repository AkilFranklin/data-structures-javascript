const Queue = require("./Queue");

class StarshipEnterprise {
  constructor(officerId = null, officerName = null, reportTo = null) {
    this.officerId = officerId;
    this.officerName = officerName;
    this.reportTo = reportTo; // the officer that the new officer reports to
    this.leftReport = null;
    this.rightReport = null;
  }

  /**
   * This method should accept an officer ID and name as its arguments,
   * and assign a new officer to an existing officer based on experience
   * level (as indicated by the officer's ID). If there's no existing
   * officer to assign the new officer to, then the new officer is the
   * captain (e.g., Captain Picard).
   * @param {*} officerId
   * @param {*} officerName
   */
  assignOfficer(officerId, officerName) {
    if (this.officerId == null) {
      this.officerId = officerId;
      this.officerName = officerName;
    } else if (officerId < this.officerId) {
      if (this.leftReport == null) {
        this.leftReport = new StarshipEnterprise(officerId, officerName, this);
      } else {
        this.leftReport.assignOfficer(officerId, officerName);
      }
    } else {
      if (this.rightReport == null) {
        this.rightReport = new StarshipEnterprise(officerId, officerName, this);
      } else {
        this.rightReport.assignOfficer(officerId, officerName);
      }
    }
  }

  /**
   * This method should return an array of officers who do not have direct reports.
   * For example, given the Starship USS Enterprise tree described above, the
   * output would be [ "Lieutenant Security-Officer", "Lt. Cmdr. LaForge", "Lieutenant Selar", ].
   * @param {*} values
   * @returns
   */
  findOfficersWithNoDirectReports(values = []) {
    // your solution here
    if (this.leftReport) {
      this.leftReport.findOfficersWithNoDirectReports(values);
    }

    if (!this.leftReport && !this.rightReport) {
      values.push(this.officerName);
    }

    if (this.rightReport) {
      this.rightReport.findOfficersWithNoDirectReports(values);
    }

    return values;
  }

  /**
   * This method should return an array of officers in decreasing order of military experience.
   * For example, given the Starship USS Enterprise tree described above, the output would be
   * [
   * "Lieutenant Selar",
   * "Lt. Cmdr. Crusher",
   * "Commander Data",
   * "Captain Picard",
   * "Lt. Cmdr. LaForge",
   * "Commander Riker",
   * "Lieutenant Security-Officer",
   * "Lt. Cmdr. Worf"
   * ].
   * @param {*} officerNames
   * @returns
   */
  listOfficersByExperience(officerNames = []) {
    // your solution here
    if (this.rightReport) {
      this.rightReport.listOfficersByExperience(officerNames);
    }

    officerNames.push(this.officerName);

    if (this.leftReport) {
      this.leftReport.listOfficersByExperience(officerNames);
    }

    return officerNames;
  }

  /**
   * Suppose a fierce battle with an enemy ensues. This method should take the
   * tree of commanding officers above and outline the ranking officers in their
   * ranking order so that if officers start dropping like flies, you know who
   * the next person to take over command is. Your method should return an object
   * where each property represents the numerical rank, and each value consists
   * of an array of officers (in any experience order) of a particular rank.
   * @param {*} tree
   * @param {*} rankedOfficers
   * @returns
   */
  listOfficersByRank(tree, rankedOfficers = {}) {
    // your solution here
    const queue = new Queue();
    queue.enqueue({ node: tree, level: 1 });

    while (queue.first) {
      const { node, level } = queue.dequeue();

      if (!rankedOfficers[level]) {
        rankedOfficers[level] = [];
      }
      rankedOfficers[level].push(node.officerName);

      if (node.leftReport) {
        queue.enqueue({ node: node.leftReport, level: level + 1 });
      }
      if (node.rightReport) {
        queue.enqueue({ node: node.rightReport, level: level + 1 });
      }
    }

    return rankedOfficers;
  }
}

module.exports = StarshipEnterprise;
