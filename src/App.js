
import './App.css';
import React from "react";

class App extends React.Component {
  state={
    words:[],
      word:"",

  }
  input=(e)=>{
      const message=e.target.value;
      this.setState({
          word:message
      })
  }
    send=(e)=>{
        let newMessage={
           word:this.state.word
        }
        this.state.words.push(newMessage)
        //newMessage.word.length>5?this.setState({wordsMore5:this.state.wordsMore5+1}):this.setState({wordsLess5:this.state.wordsLess5+1})

        this.setState({
            word:""
        })
    }
    deleteOne=(i)=>{
        this.state.words.splice(i,1)
        this.setState({
        })
    }
    clear=(e)=>{
        this.setState({
        words:[],
        })
    }
    calcMore5=()=>{
      let sum=0
        this.state.words.map((item)=>{
            item.word.length>5?sum++:sum+=0
        })
        return sum

    }
    calcLess5=()=>{
        let sum=0
        this.state.words.map((item)=>{
            item.word.length<=5?sum++:sum+=0
        })
        return sum
    }
  render() {

    return (
        <div>
          <h3>Enter a message</h3>
          <input placeholder="Massege" value={this.state.word} onChange={this.input}/>
            <button disabled={this.state.word.length===0} onClick={this.send}>send</button>
            <ol type="1">
                    {this.state.words.length>0&&
                        this.state.words.map((item,i)=>{
                            return(
                                <li key={i} onClick={this.deleteOne.bind(this,i)}>
                                    {item.word}
                                </li>
                            )
                        })

                    }
            </ol>
            <p>more 5 chars : {this.calcMore5()} </p>
            <p>less 5 chars : {this.calcLess5()} </p>
            <button disabled={this.state.words.length===0} onClick={this.clear}>Clear</button>
        </div>
    );
  }
}


export default App;
