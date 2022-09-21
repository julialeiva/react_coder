
const ItemDetail = ({ producto }) => {

  return (
    <div style={styles.infoContainer}>
      <img style={styles.img} src={producto.image} alt={producto.title} />
      <div style={styles.infoTextContainer}>
        <div style={styles.infoText}>
          <h1>{producto.title}</h1>
          <span>${producto.price}</span>
          <p>{producto.description}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: "40%"
  },
  infoTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  infoText: {
    padding: "10px",
    marging: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  }
};

export default ItemDetail