const PromocionItem = (props) => {
    const { title, price, detail } = props;
  
    return (
      <div className="promocion">
            <h2>{title}</h2>
            <h4>$ {price}</h4><h5>por usuario al mes</h5>
            <p dangerouslySetInnerHTML={{ __html: detail }} />
      </div>
    );
  };
  
  export default PromocionItem;