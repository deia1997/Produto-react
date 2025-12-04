import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useProduto = () => {
  const [produto, setProduto] = useState({
    id: null,
    nome: "",
    valor: ""
  });

  const [listaProdutos, setListaProdutos] = useState(() => {
    const lista_storage = localStorage.getItem("listaProdutos");
    return lista_storage ? JSON.parse(lista_storage) : [];
  });

  useEffect(() => {
    localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
  }, [listaProdutos]);

  const exibirMensagem = (color, msg) => {
    const divMensagem = document.getElementById("divMensagem");
    divMensagem.style.color = color;
    divMensagem.textContent = msg;
  };

  // ADICIONAR PRODUTO (ID GERADO AUTOMATICAMENTE)
  const adicionar_produto = (nome, valor) => {
    const novoProduto = {
      id: Math.random(),    // id automático
      nome: nome,
      valor: valor
    };

    const novaLista = [...listaProdutos, novoProduto];
    setListaProdutos(novaLista);
    alert("O produto foi adicionado com sucesso!");
  };

  const excluir_produto = (id) => {
    const novaLista = listaProdutos.filter((p) => p.id !== id);
    setListaProdutos(novaLista);
    alert("O produto foi excluído com sucesso!");
  };

  const navigate = useNavigate();

  const exibir_detalhes_produto = (id) => {
    const produto = listaProdutos.find((p) => p.id === id);
    navigate("/produtoDetalhes", { state: produto });
  };

  const alterar_produto = (produto_editado) => {
    const novaLista = listaProdutos.map((p) =>
      p.id === produto_editado.id ? produto_editado : p
    );

    setListaProdutos(novaLista);
    alert("O produto foi alterado com sucesso!");
  };

  return {
    listaProdutos,
    exibirMensagem,
    adicionar_produto,
    excluir_produto,
    exibir_detalhes_produto,
    alterar_produto
  };
};

export default useProduto;
