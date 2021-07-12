function Product (props) {

    if (props.isAuth) {
        return (
        <footer className="card-footer">
            <ul className="card-footer-item is-flex-direction-column is-justify-content-space-around">
                <li><i className="far fa-edit" onClick={props.onClickEdit}></i></li>
                <li><i className="far fa-copy" onClick={props.onClickCopy}></i></li>
                <li><i className="far fa-trash-alt has-text-danger" onClick={props.onClickDelete}></i></li>
            </ul>
        </footer>)}

    const {id, image, title,category,price,description} = props.details;
    // const image = props.details.image;
    // const title = props.details.title;
    // const category = props.details.category;
    // const price = props.details.price;
    // const description = props.details.description;
    return (
      <div className="column is-6">
                    <div className="card is-horizontal shadow-md transform is-duration-300 hover-shadow-xl hover-translate-y">
                        <div className="card-image">
                            <figure className="image">
                                <img src={image}
                                    alt={title} />
                            </figure>
                        </div>
                        <div className="card-content p-0 is-flex is-flex-direction-column">
                            <div className="content p-5 has-text-grey-light">
                                <h3>{title}</h3>
                               <p className="is-size-6 has-text-weight-normal">{description}</p>
                               <h4>{price}</h4>
                               <h4>ID: {id}</h4>
                            </div>
                        </div>
                        <footer className="card-footer">
                            <ul className="card-footer-item is-justify-content-space-around flex-direction-row column-on-desktop">
                                <li><i className="far fa-edit" onClick={props.onClickEdit}></i></li>
                                <li><i className="far fa-copy" onClick={() => props.copyFunction(props.details)}></i></li>
                                <li><i className="far fa-trash-alt has-text-danger" onClick={() => props.deleteFunction(props.details)}></i></li>
                            </ul>
                        </footer>
                    </div>
                </div>
    );
  }

  export default Product;