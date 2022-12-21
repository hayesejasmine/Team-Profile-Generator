const teamMember = require('./Employee')

class Manager extends teamMember {
    constructor(name, id, email, phone) {
        super(name, id, email, phone)
        this.role = "Manager";
        this.phone = phone;
    }
    getphone(){
        return this.phone
    }
}
module.exports = Manager