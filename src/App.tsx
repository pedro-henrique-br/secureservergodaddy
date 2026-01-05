import React from "react";
import { useEffect, useState } from "react";
import logo from "./../public/logo_sabedoria2.jpg";

export default function App() {

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rid = params.get("rid");

    console.log("RID:", rid);
  }, []);

  return (
    <div className="min-h-screen bg-[#ada333] flex items-center justify-center">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg px-16 py-12 text-gray-800">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={logo}
            alt="Logo da Empresa"
            className="h-16 object-contain"
          />
        </div>

        {/* Título */}
        <h1 className="text-2xl font-semibold mb-8 text-center">
          Aviso de Conscientização em Segurança da Informação
        </h1>

        {/* Introdução centralizada */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <p className="mb-4">
            Esta página faz parte de uma{" "}
            <strong>campanha interna de conscientização</strong> sobre segurança
            da informação, com foco na prevenção de golpes digitais e tentativas
            de phishing.
          </p>

          <p>
            O objetivo desta iniciativa é demonstrar, de forma prática, como
            mensagens aparentemente legítimas podem ser utilizadas para induzir
            usuários a clicar em links ou fornecer informações sensíveis.
          </p>
        </div>

        {/* Conteúdo informativo */}
        <div className="max-w-xl mx-auto mb-10">
          <p className="mb-4 text-center">
            Em situações reais, esse tipo de ação pode resultar no
            comprometimento de credenciais de acesso, acesso não autorizado a
            sistemas internos e exposição de dados da empresa.
          </p>

          <p className="mb-3 font-medium text-center">
            Recomendamos atenção redobrada ao:
          </p>

          <ul className="list-disc list-inside text-left mx-auto max-w-md space-y-1">
            <li>Clicar em links recebidos por e-mail ou mensagens</li>
            <li>Abrir anexos inesperados</li>
            <li>Receber comunicações de remetentes externos</li>
            <li>Mensagens com senso de urgência ou solicitação incomum</li>
          </ul>
        </div>

        {/* Mensagem tranquilizadora */}
        <div className="border-t pt-6 text-sm text-gray-600 text-center max-w-xl mx-auto">
          <p>
            Esta simulação <strong>não coletou senhas, dados pessoais ou
              informações sensíveis</strong>. Nenhuma ação adicional é
            necessária por parte do usuário.
          </p>
          <p>
            Em caso de dúvidas, entre em contato com o time de TI: <span className="font-semibold">{"ti@gruposabedoria.com.br"}</span>.
          </p>
        </div>

      </div>
    </div>
  );
}
