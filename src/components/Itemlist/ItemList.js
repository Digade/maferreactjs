import Item from "../Item/Item";

const ItemList = ({ lista }) => {
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

export default ItemList;
