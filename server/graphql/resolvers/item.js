const Item = require('../../models/item');


module.exports = {
    items: async () => {
        try {
            const items = await Item.find();
            return items.map(item => {
                return { ...item._doc, _id: item.id };
            });
        } catch (err) {
            throw err;
        }
    },

    createItem: async (args) => {
        console.log(args.itemInput);
        const item = new Item({
            name: args.itemInput.name,
            type: args.itemInput.type,
            price: +args.itemInput.price,
            image: args.itemInput.image,
        });

        try {
            const createdItem = await item.save();
            return createdItem._doc;
        }
        catch (error) {
            console.log(err);
            throw err;
        }
    }
}
