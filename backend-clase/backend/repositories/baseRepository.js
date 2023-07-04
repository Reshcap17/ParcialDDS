class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get() {
        return this.model.findAll({ limit: 50 });
    }

    async create(entity) {
        return this.model.create(entity);
    }

    async retrieve(id) {
        return this.model.findByPk(id);
    }

    async update(id, entity) {
        const entityToPersist = await this.model.findByPk(id);

        Object.assign(entityToPersist, entity);
        return entityToPersist.save();
    }

    async delete(id) {
        const entity = await this.model.findByPk(id);

        return entity.destroy();
    }
}

module.exports = BaseRepository;
