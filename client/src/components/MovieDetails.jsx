import React from 'react'
import { useParams } from 'react-router-dom'


export default function MovieDetails() {
    const params = useParams();

    const moiveId = params.id;

    return (
        <div>MovieDetails about {moiveId}</div>
    )
}
