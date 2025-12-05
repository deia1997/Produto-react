import React from "react";
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
        {/* mensagem (se você usar) */}
        <div id="divMensagem" role="alert" aria-live="assertive"></div>

        {/* usar seu componente de formulário (mantém campos um embaixo do outro) */}
        <FormCadProduto adicionar_produto={adicionar_produto} />

        {/* Se não houver produtos */}
        {listaProdutos.length === 0 ? (
          <p style={{ marginTop: "20px" }}>Não há produtos cadastrado no momento.</p>
        ) : (
          <div className="lista-produtos" style={{ marginTop: "20px" }}>
            {/* Cabeçalho simples */}
            <div className="produto-row header" aria-hidden="true">
              <div className="produto-info cabeçalho-nome">Nome</div>
              <div className="produto-info cabeçalho-valor">Valor</div>
              <div className="produto-actions cabeçalho-acoes">Ações</div>
            </div>

            {/* Linhas dos produtos */}
            {listaProdutos.map((produto) => (
              <div
                key={produto.id}
                className="produto-row"
                role="group"
                aria-label={`Produto ${produto.nome}`}
              >
                <div className="produto-info">
                  <strong>{produto.nome}</strong>
                </div>

                <div className="produto-info">
                  R$ {produto.valor}
                </div>

                <div className="produto-actions">
                  <button
                    className="botao-grid"
                    onClick={() => excluir_produto(produto.id)}
                    aria-label={`Excluir ${produto.nome}`}
                  >
                    Excluir
                  </button>

                  &nbsp;

                  <button
                    className="botao-grid"
                    onClick={() => exibir_detalhes_produto(produto.id)}
                    aria-label={`Exibir detalhes de ${produto.nome}`}
                  >
                    Detalhes
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
