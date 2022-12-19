const teamMember = require('./Employee')

class Manager extends teamMember {
    constructor(name, id, email, phone) {
        super(name, id, email)
        this.role = "Manager";
        this.phone = "phone";
    }
    getPhone(){
        return this.phone
    }
}
module.exports = Manager