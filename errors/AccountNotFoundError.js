class AccountNotFoundError extends Error {
    constructor(args) {
        super(args)
        this.code = "ACCOUNT_NOT_FOUND_ERROR";
        this.msg = args != null ? args : "Account not found!";
    }
}

module.exports = AccountNotFoundError;