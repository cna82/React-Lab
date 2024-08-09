import "./index.css";
const ProductList = (props) => {
  const calcPrice = () => {
    if (props.discountPercent != 0) {
      let percent = props.price - (props.price * props.discountPercent) / 100;
      return percent;
    }
  };

  return (
    <div className="card p-2">
      {props.isSpecialSale ? (
        <img
          src="./Special/SpecialSell.svg"
          id="special-cell-icon"
          width="70px"
          height="30px"
          className="d-block "
        />
      ) : (
        <span id="free-space"></span>
      )}
      <img
        src={props.imgSrc}
        className="card-img-top"
        alt="..."
        width="100px"
        height="210px"
      />
      {props.isFreeShipping ? (
        <span className="badge my-badge">
          ارسال رایگان &nbsp;
          <img src="./FreeShip/freeShip.png" width="20px" height="20px" />
        </span>
      ) : (
        <br />
      )}
      <div className="card-body">
        <p className="card-text text-center text-break">{props.title}</p>
        <div className="d-flex">
          <span>
            <i className="fa fa-star star-icon" aria-hidden="true"></i> &nbsp;
            {props.rate}
          </span>
          {props.count <= 10 && (
            <p className="text-danger count">
              تنها {props.count}عدد در انبار باقی مانده
            </p>
          )}
        </div>
        <div className="mt-2">
          {props.isSpecialSale ? (
            <div>
              <span>تومان {calcPrice()}</span>
              <span className="badge bg-danger percent-badge">
                {props.discountPercent}%
              </span>
              <span className="d-block text-decoration-line-through text-secondary">
                {props.price}
              </span>
            </div>
          ) : (
            <span>تومان {props.price}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
