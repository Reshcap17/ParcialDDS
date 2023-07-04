class NotImplementedError extends Error {
    constructor(message = 'Not implemented') {
        super(message);
        this.name = 'NotImplementedException';
    }
}

module.exports = NotImplementedError;
