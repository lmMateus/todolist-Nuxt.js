export default (task, priority) =>{
  if(!task || !priority || priority == "escolha") return alert("Preencha todos os campos!!");
  return true;
}