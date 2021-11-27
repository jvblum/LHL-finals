import { evaluate } from "../helpers/evaluate"; // this import might not be necessary

export default function History(props) {
  const { humanHandHistory, computerHandHistory } = props;
  console.log(humanHandHistory)
  console.log(computerHandHistory)
  // let last = ""
  let history = []
  
  for (let i=humanHandHistory.length-1; i >= 0; i--){
    history.push(humanHandHistory[i].type + " " + computerHandHistory[i].type ) 
    history.push("---")
  }
  
  
 
  return (
    <div>
      {history}
    </div>
  );
}
