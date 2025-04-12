function CartItem({name, address, cost}) {
    return (
        <div>
            <div>{name}</div>
            <div>{address}</div>
            <div>{cost}</div>
        </div>
    )
}

export default CartItem
