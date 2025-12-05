import { useLocation, useNavigate } from "react-router-dom";
import "./css/Produto.css";
import { useState } from "react";
import useProduto from "../hooks/useProduto";

const TelaProdutoDetalhes = () => {
  const { alterar_produto } = useProduto();
  const location = useLocation();
  const produto = location.state || {};
  const navigate = useNavigate();
  const [input_nome, setInput_nome] = useState(produto.nome);
  const [input_valor, setInput_valor] = useState(produto.valor);


  const handle_buttonClick_alterar = () => {
    const produto_editado = {
      ...produto,

      nome: input_nome,
      valor: input_valor
    };


    alterar_produto(produto_editado);
    navigate("/");
  };

  const handle_buttonClick_voltar = () => {
    navigate(-1);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }} tabIndex={1}>
        Tela de Detalhe, dos Produtos listados.
      </h1>

      <div className="box">
        <div style={{ textAlign: "left", padding: "5px" }}>
          <h2 tabIndex={1}>ID: {produto.id}</h2>
        </div>

        <div style={{ textAlign: "left", padding: "4px" }}>
          <h2 tabIndex={1}>
           Nome: &nbsp;
          <input
              type="text"
              size={50}
              role="group"
              aria-label="nome do produto listado"
              value={input_nome}
              onChange={(campo) => setInput_nome(campo.target.value)}
            />
          </h2>
        </div>


        <div style={{ textAlign: "left", padding: "4px" }}>
          <h2 tabIndex={1}>
            Valor: &nbsp;
            <input
              type="number"
              step="0.01"
              role="group"
              aria-label="valor do produto"
              value={input_valor}
              onChange={(campo) => setInput_valor(campo.target.value)}
            />
          </h2>
        </div>

        <button
          onClick={() => {
            handle_buttonClick_alterar();
          }}
          color: green;
        >
          alterar
        </button>
        &nbsp;

        <button
          onClick={() => {
            handle_buttonClick_voltar();
          }}
          color: red
        >
          voltar
        </button>



      </div>
    </>
  );
};

export default TelaProdutoDetalhes;

