//Types
import { Icone } from "./types/Icones";
//React Hooks
import { useState } from "react";
//Components
import { Header } from "./Components/header";
//rotas
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profissional } from "./pages/Profissional";
import { PessoaUsuaria } from "./pages/PessoaUsuaria";


function App() {
  //State que alterna qual icone esta ativo no menu e no footer
  const[iconeAtivo,setIconeAtivo] = useState<Icone[]>([
    {IconeNome:"Home",ativo:true,rota:"/"},
    {IconeNome:"Pessoa Usuária",ativo:false,rota:"pessoa-usuaria"},
    {IconeNome:"Profissional",ativo:false,rota:"profissional"},
  ]);

  //esta funçao realiza a troca do item que esta selecionado
  const SelectItemMenu = (element:string) => {
    switch(element){
      case "Home":
        setIconeAtivo([
          {IconeNome:"Home",ativo:true,rota:"/"},
          {IconeNome:"Pessoa Usuária",ativo:false,rota:"pessoa-usuaria"},
          {IconeNome:"Profissional",ativo:false,rota:"profissional"},
        ])
      break
      case "Pessoa Usuária":
        setIconeAtivo([
          {IconeNome:"Home",ativo:false,rota:"/"},
          {IconeNome:"Pessoa Usuária",ativo:true,rota:"pessoa-usuaria"},
          {IconeNome:"Profissional",ativo:false,rota:"profissional"},
        ])
      break
      case "Profissional":
        setIconeAtivo([
          {IconeNome:"Home",ativo:false,rota:"/"},
          {IconeNome:"Pessoa Usuária",ativo:false,rota:"pessoa-usuaria"},
          {IconeNome:"Profissional",ativo:true,rota:"profissional"},
        ])
      break
    }
  }
  //esta funçao diz qual item do menu deve esta selecionado
  const ItemMenu = (e:any) => {
    const element  = e.target as HTMLAnchorElement
    SelectItemMenu(element.textContent as string);
  }



  return (
   <div>
    {/*header*/}
    {/*rotas*/}
    <Header func={ItemMenu} Icones={iconeAtivo}/>
    <Routes>
      <Route path="/" element={<Home func={ItemMenu}/>}  />
      <Route path="/pessoa-usuaria" element={<PessoaUsuaria/>}  />
      <Route path="/profissional" element={<Profissional/>}  />
    </Routes>
    {/*footer*/}


   </div>
  )
}

export default App
