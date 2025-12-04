Adicionarnar { useState } from "react";
import useProduto from "../hooks/useProduto";

const FormCadProduto = ({ adicionar_produto }) => {
  const [input_nomeProduto, setInput_nomeProduto] = useState("");
  const [input_valorProduto, setInput_valorProduto] = useState("");

  const { exibirMensagem } = useProduto();

  const handle_buttonClick_add_produto = () => {
    if (!input_nomeProduto || !input_valorProduto) {
      exibirMensagem("red", "Preencha os campos!");
      return;
    }

    // Agora só nome e valor, id é automático
    adicionar_produto(input_nomeProduto, input_valorProduto);

    setInput_nomeProduto("");
    setInput_valorProduto("");
  };

  return (
    <>
      <div id="divMensagem" role="alert" aria-live="assertive"></div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        
        {/* NOME */}
        <input
          type="text"
          role="group"
          aria-label="Nome do produto listado"
          value={input_nomeProduto}
          tabIndex={1}
          style={{ width: "80%" }}
          placeholder="Nome do produto"
          onChange={(e) => setInput_nomeProduto(e.target.value)}
        />

        {/* VALOR */}
        <input
          type="number"
          role="group"
          aria-label="Valor do produto listado"
          value={input_valorProduto}
          tabIndex={1}
          style={{ width: "80%" }}
          placeholder="Valor do produto"
          onChange={(e) => setInput_valorProduto(e.target.value)}
        />

        <button tabIndex={1} onClick={handle_buttonClick_add_produto}>
    Produto adicionado
        </button>

      </div>
    </>
  );
};

export default FormCadProduto;

