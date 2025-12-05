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
        Minha lista de produtos cadastrados
      </h1>

      <div className="box">

        {/* Formulário (continua igual) */}
        <FormCadProduto adicionar_produto={adicionar_produto} />

        {listaProdutos.length === 0 ? (
          <p style={{ marginTop: "20px" }}>Não há produtos cadastrados no momento.</p>
        ) : (
          <div style={{ marginTop: "30px" }}>

            {/* Cabeçalho */}
            <div className="linha">
              <div className="coluna"><strong>Nome</strong></div>
              <div className="coluna"><strong>Valor</strong></div>
              <div className="coluna-acao"><strong>Ações</strong></div>
            </div>

            {/* Lista */}
            {listaProdutos.map((produto) => (
              <div className="linha" key={produto.id}>
                
                <div className="coluna">
                  {produto.nome}
                </div>

                <div className="coluna">
                  R$ {produto.valor}
                </div>

                <div className="coluna-acao">
                  <button onClick={() => excluir_produto(produto.id)}>
                    Excluir
                  </button>

                  <button onClick={() => exibir_detalhes_produto(produto.id)}>
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

