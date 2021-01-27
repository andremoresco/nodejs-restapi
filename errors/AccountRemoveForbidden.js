class AccountRemoveForbidden extends Error {
    constructor(args) {
        super(args)
        this.code = "ACCOUNT_REMOVE_FORBIDDEN";
        this.msg = "You cannot remove Account. ";
        this.msg = this.msg + (args!= null ? args : '');
    }
}

module.exports = AccountRemoveForbidden;