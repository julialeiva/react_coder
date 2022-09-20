import '../App.css';

const Item = ({products}) => {
    return (
        <div style={styles.items}>
            <h4>{products.tittle}</h4>
            <img src={products.pictureUrl} style={styles.img}/>
            <text>$ {products.price}</text>
            <text>{products.description}</text>
        </div>

     )
};

const styles = {
    items: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    img: {
      width: "200px",
      height: "200px",
      alignItems: "center",
    },
};

export {Item}

