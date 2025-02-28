import { useEffect, useState } from 'react';

export const Dogs = () => {
    const [dogs, setDogs] = useState([]);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/10')
            .then(response => response.json())
            .then(data => setDogs(data.message))
            .catch(error => console.error('Error fetching dog images:', error));
    }, []);

    return (
        <>
        <h1 className="text-2xl font-bold text-center my-4">10 perros random</h1>
        <div className="flex justify-center my-4">
            <button 
                onClick={() => window.location.reload()} 
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
                Regenerar perros
            </button>
        </div>
        <div className="flex flex-wrap justify-center">
            {dogs.map((dog, index) => (
                <img key={index} src={dog} alt={`Random dog ${index + 1}`} className="w-48 h-48 m-2 object-cover rounded-lg shadow-md" />
            ))}
        </div>
        </>
    );
}