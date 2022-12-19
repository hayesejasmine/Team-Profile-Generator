const teamMember = require('./Employee')

class Engineer extends teamMember {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.role = 'Engineer';
        this.gitHub = gitHub;
    }
    getgitHub() {
        return this.gitHub
    }
}
module.exports = Engineer