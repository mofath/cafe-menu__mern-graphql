import React, { useRef } from 'react';

import { addItem } from '../../_services/item.service';
import classes from './AddItem.module.css';

const AddItem = () => {
    const typeRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const uploadRef = useRef();

    const submitHandler = async (event) => {
        event.preventDefault();
        const type = typeRef.current.value;
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const image = uploadRef.current.value;

        if (type.trim().length === 0 || price <= 0 || name.trim().length === 0 || image.trim().length === 0)
            return;

        const requestBody = {
            query: `
                  mutation {
                    createItem(itemInput: {name: "${name}", type: "${type}", price: ${price}, image: "${image}"}) {
                      name
                      type
                      price
                      image
                    }
                  }`
        };

        await addItem(requestBody).read();
    }

    return (
        <div  className={classes.FormContainer}>
            <form className={classes.AddItemForm} onSubmit={submitHandler}>

                <div className={classes.FormControl}>
                    <label htmlFor="type">Type</label>
                    <input type="text" id="type" ref={typeRef} />
                </div>

                <div className={classes.FormControl}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" ref={nameRef} />
                </div>

                <div className={classes.FormControl}>
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" ref={priceRef} />
                </div>

                <div className={classes.FormControl}>
                    <label htmlFor="photo">Photo</label>
                    <input type="text" id="photo" ref={uploadRef} />
                </div>

                <div className={classes.FormAction}>
                    <button type="submit">Save Item</button>
                </div>

            </form>
        </div>
    );
}

export default AddItem;