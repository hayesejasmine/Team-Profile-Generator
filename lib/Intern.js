const teamMember = require('./Employee')

class Intern extends teamMember {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.role = 'Intern';
        this.school = school;
    }
    getSchool() {
        return this.school
    }
}
module.exports = Intern