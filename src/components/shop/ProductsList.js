
function ProductsList(props) {
  return (
    <div id='products'>
      {props.array.map(el => {
        return (
          <div className='product'>
            <img src={el.link} />
            <h3>{el.name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsList;