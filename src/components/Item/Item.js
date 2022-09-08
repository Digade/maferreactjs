const Item = ({titulo, price, img}) => {
  return (
    <div>
      <img width={'200px'} src={img} alt={titulo}/>
      <h1>{titulo}</h1>
      <h3>{price}</h3>
    </div>
  );
};

export default Item;
