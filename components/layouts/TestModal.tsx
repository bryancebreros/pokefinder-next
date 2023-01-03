import {useEffect, useState} from 'react'
import axios from "axios";

const TestModal = ({ability}) => {
    const [description, setDescription] = useState("")

    useEffect(() => {
        const getDescription = async () => {
            const res = await axios(ability)
            const effectArray = res.data.effect_entries
            effectArray.map((e) => {
                e.language.name == 'en' ? setDescription(e.short_effect) : null
            })
            
        }
        getDescription()
    }, [])
    
    console.log({description});
    
  
    
  return (
    <span>{description}</span>
  );
};

export default TestModal;

