import React, { useState } from "react";
import axios from "axios";

const UpdateMovie = (props) => {
    const [ star, setStar ] = useState({
        star0: '',
        star1: '',
        star2: '',
        star3: ''
    });
    const [ movie, setMovie ] = useState({
        id: props.match.params.id,
        title: '',
        director: '',
        metascore: 0,
        stars: []
    });

    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    const handleStars = e => {
        setStar({
            ...star,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        movie.stars.push(star.star0);
        movie.stars.push(star.star1);
        movie.stars.push(star.star2);
        movie.stars.push(star.star3);
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then( (response) => {
            props.history.push(`/movies/${props.match.params.id}`)
        })
        .catch(error => {
            console.log(error);
        });
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Update Movie</h1>
                <input 
                    type="text"
                    name="title"
                    value={movie.title}
                    onChange={handleChange}
                    placeholder="Enter Title"
                />
                <input 
                    type="text"
                    name="director"
                    value={movie.director}
                    onChange={handleChange}
                    placeholder="Enter Directors Name"
                />
                <input 
                    type="text"
                    name="metascore"
                    value={movie.metascore}
                    onChange={handleChange}
                    placeholder="Enter Metascore"
                />
                <input 
                    type="text"
                    name="star0"
                    value={star.star0}
                    onChange={handleStars}
                    placeholder="Enter Star"
                />
                <input 
                    type="text"
                    name="star1"
                    value={star.star1}
                    onChange={handleStars}
                    placeholder="Enter Star"
                />
                <input 
                    type="text"
                    name="star2"
                    value={star.star2}
                    onChange={handleStars}
                    placeholder="Enter Star"
                />
                <input 
                    type="text"
                    name="star3"
                    value={star.star3}
                    onChange={handleStars}
                    placeholder="Enter Star"
                />
                <button className="submit-button">Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie;