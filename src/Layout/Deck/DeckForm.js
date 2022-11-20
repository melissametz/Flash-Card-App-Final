//react
import React from "react"; 

//reusable for create and edit
function DeckForm({ formData, handleChange, handleSubmit }) {

    return (
        <form onSubmit={handleSubmit}>
            <label >
                Name:
                <br />
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: "100%"}}
                    required={true}
                    />
            </label>
            <br />
            <label htmlFor="description">
                Description:
                <br />
                <textarea
                    id="description"
                    name="description"
                    type="text"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    style={{ width: "100%"}}
                    required={true}
                />
            </label>
        </form>
    )
}

export default DeckForm;