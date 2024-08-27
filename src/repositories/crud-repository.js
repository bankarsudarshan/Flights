const { Logger } = require("../config");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    // this method of the class CrudRepository will insert the 'data' in the table corresponding to 'model'
    async insertTuple(data) {
        const response = await this.model.create(data);
        return response;
    }

    async deleteTuple(dataId) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: dataId,
                },
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repo : destroy");
            throw error;
        }
    }

    async getTuple(dataId) {
        try {
            const response = await this.model.findByPk(dataId);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repo : get");
            throw error;
        }
    }

    async getAllTuples(dataId) {
        try {
            const response = await this.model.findAll(dataId);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repo : getAll");
            throw error;
        }
    }

    async updateTuple(id, data) {
        // data -> {col: val, ...}
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id,
                },
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the Crud Repo : update");
            throw error;
        }
    }
}

module.exports = CrudRepository;
