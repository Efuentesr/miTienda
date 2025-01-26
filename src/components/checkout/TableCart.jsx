const TableCart = ({ cart }) => {
    return (
      <table className="w-full">
        <thead className="text-xs uppercase">
          <tr>
            <th className="px-6 py-3 text-left">Producto</th>
            <th className="px-6 py-3 text-left">Precio</th>
            <th className="px-6 py-3 text-left">Cantidad</th>
            <th className="px-6 py-3 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {cart
            ? cart.map((prod, i) => (
                <tr key={i} className="border-b-2">
                  <td className="px-6 py-4">{`${prod.Description.substring(1,35)}`}</td>
                  <td className="px-6 py-4">{`S/ ${prod.price}`}</td>
                  <td className="px-6 py-4">{`${prod.qtyToBuy} Unidades`}</td>
                  <td className="px-6 py-4">{`S/ ${(
                    prod.price * prod.qtyToBuy
                  ).toFixed(2)}`}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  };
  
  export default TableCart;
  