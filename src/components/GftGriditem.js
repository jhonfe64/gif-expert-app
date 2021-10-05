import React from 'react';
import '../index.css';

function GftGriditem({img}) {
    return (
        <div className="card animate__animated animate__fadeIn" key={img.id}>
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    )
}

export default GftGriditem
