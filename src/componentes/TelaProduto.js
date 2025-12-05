import useProduto from "../hooks/useProduto";
import "./css/Produto.css"; 
import FormCadProduto from "./FormCadProduto";

const TelaProduto = () => {
  const {
    listaProdutos,
    adicionar_produto,
    excluir_produto,
    exibir_detalhes_produto
  } = useProduto();

  return (
    <>
      <h1 style={{ textAlign: "center" }} tabIndex={1}>
        Minha lista de Produtos cadastrados
      </h1>

      <div className="box">

        {/* Formulário continua um abaixo do outro */}
        <FormCadProduto adicionar_produto={adicionar_produto} />

        {/* Lista formatada lado a lado */}
        {listaProdutos.length === 0 ? (
          <p style={{ marginTop: "20px" }}>Não há produtos cadastrado no momento.</p>
        ) : (
          <div className="lista-produtos" style={{ marginTop: "20px" }}>

            {/* Cabeçalho */}
            <div className="produto-row header">
              <div className="produto-info">Nome</div>
              <div className="produto-info valor-col">Valor</div>
              <div className="produto-actions">Ações</div>
            </div>

            {/* Produtos */}
            {listaProdutos.map((produto) => (
              <div key={produto.id} className="produto-row">

                <div className="produto-info">
                  {produto.nome}
                </div>

                <div className="produto-info valor-col">
                  R$ {produto.valor}
                </div>

                <div className="produto-actions">
                  <button
                    className="botao-grid"
                    onClick={() => excluir_produto(produto.id)}
                  >
                    Excluir
                  </button>

                  <button
                    className="botao-grid"
                    onClick={() => exibir_detalhes_produto(produto.id)}
                  >
                    Exibir detalhes
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </>
  );
};

export default TelaProduto;
