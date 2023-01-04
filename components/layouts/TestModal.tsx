import {useEffect, useState} from 'react'
import axios from "axios";

interface TestModalProps {
  ability: string;
}
interface abilityEffect {
  short_effect: string;
  language: {
    name: string;
  }
}
const TestModal = ({ability}: TestModalProps) => {
  
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getDescription = async () => {
        const res = await axios(ability);
        const effectArray = res.data.effect_entries;
        
        effectArray.map((e: abilityEffect): void => {
            e.language.name == 'en' ? setDescription(e.short_effect) : null;
        });
        
    }
    getDescription();
  }, [ability])
    
  return (
    <span>{description}</span>
  );
};

export default TestModal;

