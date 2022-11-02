import * as S from "./styles";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import localAPI from "../../services/localApi";
import { ProductCard } from "../../components/ProductCard";
import Swal from "sweetalert2";
import { HiUserGroup } from "react-icons/hi";

export const Group = () => {
  const { id } = useParams();

  const [groupDetails, setGroupDetails] = useState({});

  const handleDeleteHero = (heroId) => {
    const members = groupDetails?.members?.filter((hero) => hero.id !== heroId);
    localAPI
      .put(`/grupos/${id}`, { ...groupDetails, members })
      .then((result) => {
        setGroupDetails(result.data);
        Swal.fire("heroi deletado com sucesso");
      });
  };

  const getGroupHeroDetails = useCallback(() => {
    localAPI.get(`grupos/${id}`).then((hero) => setGroupDetails(hero.data));
  }, [id]);

  useEffect(() => {
    getGroupHeroDetails();
  }, [getGroupHeroDetails, id, setGroupDetails]);
  return (
    <S.Wrapper>
      <S.Filter>
        <button>
          <Link to="/groups">
            <HiUserGroup size={48} color="white" />
          </Link>
        </button>
        <Link to={"/"}>
          <span>Voltar</span>
        </Link>
      </S.Filter>
      <S.Container>
        {groupDetails?.members?.length > 0 ? (
          groupDetails.members.map((hero) => (
            <S.ProductList>
              <ProductCard
                deleteHero
                handleDeleteHero={handleDeleteHero}
                hero={hero}
                getGroupHeroDetails={getGroupHeroDetails}
              />
            </S.ProductList>
          ))
        ) : (
          <div>
            <strong>
              Ainda não há heróis escolhidos no grupo {groupDetails.title}
            </strong>
          </div>
        )}
      </S.Container>
    </S.Wrapper>
  );
};
