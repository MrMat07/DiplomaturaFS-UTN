const NoticiaItem = (props) => {
    const { author, title, description, url,source,image,category,language,country,published_at } = props;

    return (
      <div className="noticia">
          <a className="article" href={url}>
            {
              {image}.image===null ? <img/> : <figure className="article-image is-4by3"> <img src={image} alt={title} /></figure>
            }
            <div className="article-body">
              <h2 className="article-title">{title}</h2>
              <p className="article-content" dangerouslySetInnerHTML={{ __html: description }}/>
              <div className="article-info">
                <span>Author: {author}</span>
                <span>Category: {category}</span>
                <span>Source: {source}</span>
                <span>{published_at}</span>
              </div>
            </div>
          </a>
      </div>
    );
  };
  
  export default NoticiaItem;