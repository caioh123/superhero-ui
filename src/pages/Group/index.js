import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import localAPI from "../../services/localApi";
import { ProductCard } from "../../components/ProductCard";
import Swal from "sweetalert2";

export const Group = () => {
  const { id } = useParams();

  const [groupDetails, setGroupDetails] = useState({});

  console.log("g do grupo", groupDetails);

  const handleDeleteHero = (heroId) => {
    const members = groupDetails?.members?.filter((hero) => hero.id !== heroId);
    localAPI
      .put(`/grupos/${id}`, { ...groupDetails, members })
      .then((result) => {
        setGroupDetails(result.data);
        Swal.fire("heroi deletado com sucesso");
      });
  };

  const getGroupHeroDetails = () => {
    localAPI.get(`grupos/${id}`).then((hero) => setGroupDetails(hero.data));
  };

  useEffect(() => {
    getGroupHeroDetails();
  }, [id, setGroupDetails]);
  return (
    <S.Container>
      <S.ProductList>
        {groupDetails.members &&
          groupDetails.members.map((hero) => (
            <ProductCard
              deleteHero
              handleDeleteHero={handleDeleteHero}
              hero={hero}
              getGroupHeroDetails={getGroupHeroDetails}
            >
              outline
            </ProductCard>
          ))}
      </S.ProductList>
    </S.Container>
  );
};
