class Factory {
   constructor(model, options) {
      this.model = model;
      this.options = options;
   }
   static async create() {
      await this.model.create(options).bind(this.model);
   }
   static async find() {
      //    await this.model.fin
   }
}

module.exports = {
   Factory,
};
