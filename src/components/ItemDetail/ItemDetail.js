import Item from "../Item/Item";
import Counter from "../Counter/Counter";

const ItemDetail = ({ lista }) => {
  return (
    <div>
    
      {lista.map((product) => (
        <>
        <Item
        key={product.id} 
        titulo={product.titulo} 
        price={product.price} 
        img={product.img} />
        <Counter/>
        </>
      ))}
    
    </div>
    
  );
};

export default ItemDetail;
