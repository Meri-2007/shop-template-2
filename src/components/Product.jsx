export const Product = ({elm, name, price, photo,onMove}) => {
    return <div className="col-md-4">
        <img src={elm.photo}
            style={{ width: 200, height: 200, objectFit: 'cover' }}
        />
        <p>{elm.name}</p>
        <p>{elm.price} USD</p>
        <button  onClick={()=> onMove(elm) }className="btn btn-primary"> move</button>
    </div>
}