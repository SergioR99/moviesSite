import { useEffect, useState } from "react";

export type Character = {
    id: string;
    name: string;
    image: string;
    gender: string;
    species: string;
}

export function useCharacters(url:string) {
    const [characterList, setCharacterList] = useState<Character[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
    fetch (url)
        .then((res: { json: () => any; }) => res.json())
        .then((data: { results: []; }) => {
            // console.log(data);
            setLoading(false)
            setCharacterList(data.results);
        })
        .catch((err: any) => {
            console.error(err)
            setLoading(false)
        })

    }, [url]);

    return { characterList, loading }

}
