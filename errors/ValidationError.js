class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.code = "VALIDATION_ERROR";
        this.message = message;
    }
}