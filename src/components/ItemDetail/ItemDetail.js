import Item from "../Item/Item";

const ItemDetail = ({ lista }) => {
  return (
    <div>
      {lista.map((product) => (
        <Item
        key={product.id} 
        titulo={product.titulo} price={product.price} img={product.img} />
      ))}
    </div>
  );
};

export default ItemDetail;
