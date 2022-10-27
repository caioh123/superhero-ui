import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../../services/api";

export const HeroDetails = () => {
  const { id } = useParams();

  const [heroes, setHeroes] = useState([]);

  console.log(heroes);

  useEffect(() => {
    API.get(`/${id}`).then((res) => {
      setHeroes(res.data);
    });
  }, []);

  return <div>oi</div>;
};
