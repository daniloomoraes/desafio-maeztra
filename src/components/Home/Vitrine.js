function Vitrine(props) {
  return (
    <a href="/" className="homeProdutoVitrine">
      <img src={props.image} alt={props.name} />
      <div>
        <img src={props.color} alt={props.name} />
        <p className="homeProdutoVitrinePreco">{props.price}</p>
        <p className="homeProdutoVitrineNome">{props.name}</p>
        <p className="homeProdutoVitrineDescricao">{props.description}</p>
        <button>Adicionar</button>
      </div>
    </a>
  );
}

export default Vitrine;
