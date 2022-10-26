import * as S from "./styles";

export const GroupTable = () => {
  return (
    <S.Table>
      <thead>
        <tr>
          <th>Nome do grupo</th>
          <th>Quantidade de heróis</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr key="1">
          <td>
            <strong>NOME DO GRUPO</strong>
          </td>
          <td>
            <strong>QNT</strong>
          </td>
          <td>
            <strong>ICONE</strong>
          </td>
        </tr>
        {/* {cart.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>
              <img
                src={pokemon.sprites.front_default || unknown}
                alt={pokemon.name}
              />
            </td>
            <td>
              <strong>{pokemon.name}</strong>
              <span>{pokemon.price}</span>
            </td>
            <td>
              <div>
                <button type="button" onClick={() => decrement(pokemon)}>
                  <MdRemoveCircleOutline
                    size={20}
                    color={theme.backgroundColor}
                  />
                </button>
                <input type="number" readOnly value={pokemon.amount} />
                <button type="button" onClick={() => increment(pokemon)}>
                  <MdAddCircleOutline size={20} color={theme.backgroundColor} />
                </button>
              </div>
            </td>
            {subTotalHidden ? null : (
              <td className="subtotal">
                <strong>{pokemon.subtotal}</strong>
              </td>
            )}
            <td>
              <button type="button" onClick={() => removeFromCart(pokemon)}>
                <MdDelete size={20} color={theme.backgroundColor} />
              </button>
            </td>
          </tr>
        ))} */}
      </tbody>
    </S.Table>
  );
};
