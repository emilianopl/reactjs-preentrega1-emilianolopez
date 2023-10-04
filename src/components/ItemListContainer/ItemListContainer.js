const ItemListContainer = ({ titulo }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col pt-3">
                    <div className="card">
                        <div className="card-header">
                        {titulo}
                        </div>
                        <div className="card-body">
                            <p className="card-text">No hay items para mostrar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;