import React from "react";

const SearchBar = (props) => {
    return (
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="input-field">
                            <input placeholder="Search for a Movie" type="text" onChange={props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchBar;

