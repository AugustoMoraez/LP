//Types
import { Icone } from "./types/Icones";
//React Hooks
import { useState } from "react";
//rotas
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profissional } from "./pages/Profissional";
import { PessoaUsuaria } from "./pages/PessoaUsuaria";


function App() {
  //State que alterna qual icone esta ativo no menu e no footer
  const[iconeAtivo,setIconeAtive] = useState<Icone[]>([
    {IconeNome:"Home",ativo:true},
    {IconeNome:"Pessoa Usuaria",ativo:false},
    {IconeNome:"Profissional",ativo:false},
  ])

  return (
   <div className="">
    {/*header*/}
    {/*rotas*/}
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/pessoa-usuaria" element={<PessoaUsuaria/>}  />
      <Route path="/profissional" element={<Profissional/>}  />
    </Routes>
    {/*footer*/}


   </div>
  )
}

export default App
