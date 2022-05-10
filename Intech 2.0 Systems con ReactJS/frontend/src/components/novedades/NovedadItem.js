const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;

  return (
    <div className="novedad">
      <img src={imagen} />
      <div className="info">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};

export default NovedadItem;
