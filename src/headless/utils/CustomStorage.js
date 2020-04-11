import Storage from 'skeletor.js/src/storage.js';

class CustomStorage {
    
    constructor (name, type, attributesToIgnore) {
        this._storage = new Storage(name, type);
        this._attributesToIgnore = attributesToIgnore;
        console.log("CustomStorage: !buileded",this);
        return this;
    }

    async initStore (type) {
        await this._storage.initStore(type);
        return
    }
    
    get storeInitialized() {
        return this._storage.storeInitialized;
    }

    get store() {
        return this._storage.store;
    }

    async clear () {
        await this._store.clear();
    }

    sync (name) {
        const localSync = this._storage.sync(name);
        const ignoreAttribs = this._attributesToIgnore;

        async function overrydedLocalSync (method, model, options) {
            if (ignoreAttribs && model && model.attributes)  {
                console.log(model.attributes);
                ignoreAttribs.forEach(ai => {
                    delete model.attributes[ai];
                });
            }
            const res = await localSync(method, model, options);

            return res;
        }

        overrydedLocalSync.__name__ = localSync.__name__;

        return overrydedLocalSync;
    }

    removeCollectionReference (model, collection) {
        return this.removeCollectionReference(model, collection);
    }

    addCollectionReference (model, collection) {
       return this._storage.addCollectionReference(model, collection);
    }

    async save (model, options={}) {
        console.log("** SAVE: ", model, options);
        const data = await this.storage.save(model, options);
        return data;
    }

    create (model, options) {
        console.log("** CREATE: ", model, options);
        return this._store.create(model, options);
    }

    update (model, options) {
        console.log("** UPDATE: ", model, options);
        return this._store.update(model, options);
    }

    find (model) {
        console.log("** FIND: ", model);
        return this._store.find(model);
    }

    async findAll () {
        const response = await this._store.findAll();
        return response;
    }

    async destroy (model, collection) {
        const response = await this._storage.destroy(model, collection);
        return response;
    }

    getStorageSize () {
        return this._storage.getStorageSize();
    }

    getItemName (id) {
        return this._storage.getItemName(id);
    }
}

export default CustomStorage;
