import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TelaProduto = () => {
  const navigate = useNavigate();

  const [listaProdutos, setListaProdutos] = useState(() => {
    const listaStorage = localStorage.getItem("listaProdutos");
    return listaStorage ? JSON.parse(listaStorage) : [];
  });

  const [produto, setProduto] = useState({
    nome: "",
    valor: ""
  });

  useEffect(() => {
    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
  }, [listaProdutos]);

  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  const adicionarProduto = () => {
    if (produto.nome.trim() === "" || produto.valor.trim() === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const novoProduto = {
      id: Date.now(),
      nome: produto.nome,
      valor: produto.valor
    };

    setListaProdutos([...listaProdutos, novoProduto]);
    setProduto({ nome: "", valor: "" });
  };

  const abrirDetalhes = (item) => {
    navigate("/produtoDetalhes", { state: item });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Produto</h2>

      {/* Inputs lado a lado */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={produto.nome}
          onChange={handleChange}
          style={{ padding: "8px" }}
        />

        <input
          type="number"
          name="valor"
          placeholder="Valor"
          value={produto.valor}
          onChange={handleChange}
          style={{ padding: "8px" }}
        />

        <button onClick={adicionarProduto} style={{ padding: "8px 16px" }}>
          Adicionar
        </button>
      </div>

      <h3>Lista de Produtos</h3>

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {listaProdutos.map((item) => (
            <tr key={item.id}>
              {/* ❗ Retirado o ID da tabela */}
              <td>{item.nome}</td>
              <td>R$ {item.valor}</td>
              <td>
                <button onClick={() => abrirDetalhes(item)}>Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default TelaProduto;

