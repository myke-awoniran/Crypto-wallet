class Factory {
    constructor(model) {
        this.model = model;
    }
    async create(options) {
        return await this.model.create(options);
    }
    async findOne(criteria, projection) {
        return await this.model.findOne(criteria, projection);
    }
    async find(criteria, projection) {
        return await this.model.fine(criteria, projection);
    }
}

module.exports = {
    Factory,
};
