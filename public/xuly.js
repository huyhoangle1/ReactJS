class Hoang extends React.Component{
    render(){
      
      return (  <div> <h1 className="mauvang">{this.props.ten} - {this.props.nguoilam}</h1>
      <p>{this.props.children}</p>
      <button onClick={()=>{alert(this.props.children)}}>THÔNG TIN</button>
      
      </div>)
    }
}
function getname(name) {
    alert(name)
}
// addstudent(){
//     this.setState({total: this.state.total + 1});
// }
class Hoang2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          tongHocVien:this.props.tongHocVien
        };
      }
  
    render(){
      return (
      <div><h1 className="mauvang">{this.props.ten}</h1>
      <p>{this.props.children}</p>
      <button onClick={()=>{var str=(this.props.ten)+ ' ' + this.props.children;getname(str)}}>THÔNG TIN</button>
      <button onClick={()=>{ this.setState({tongHocVien: Number(this.state.tongHocVien)+ 1})}}>Thêm học viên</button>
      <p>So hoc vien: {this.state.tongHocVien}</p>
      </div>
    );
 }
}

class InputTag extends React.Component{

      focusTextInput = ()=>{
        var text = this.refs.s1.value;
        var text2 = this.refs.txt.value;
        alert(text);
        console.log(text2);
      }
    render(){
      return (
      <div>
          <select ref="s1">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
              </select>
          <input
          type="text"
          ref="txt" />
        <input
          type="button"
          value="Click"
          onClick={this.focusTextInput}
        />
      </div>
    );
 }
}

function Hoang3 (){
    return  <h1 className="mauvang">Demo Reactjs function </h1>;    
}
const element = <Hoang2 />

class InputTags extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          num : 0
        };
      }
      add=()=> {
        this.setState({num: this.state.num + 1})
    }
    
  render(){
    return(
        <button onClick={this.add}>Hello {this.state.num}</button>
    )
}
}
class Album extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          hinh : 1
        };
      }
      next=()=>{
         this.setState({hinh : this.state.hinh ==5?5:this.state.hinh +1}) 
      }
      prev=()=>{
         this.setState({hinh : this.state.hinh ==1?1:this.state.hinh -1}) 
      }
  render(){
    return(
     <div>
         <img src={"image/" + this.state.hinh +".png"} /><hr/>
         <div>
         <button onClick={this.prev}>Prev</button>
         <button onClick={this.next}>Next</button>
         </div>
     </div>
    )
}
}
class Albums extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          hinh : 1
        };
      }
 changeImage=()=>{
     this.setState({hinh:( this.state.hinh %5 ) +1})
 }
 

  render(){
    return(
     <div>
         <img src={"image/" + this.state.hinh +".png"} /><hr/>
         <button onClick={this.tool}>Prev</button>
     </div>
    )
}
    componentDidMount(){
        setInterval(this.changeImage, 1000);

}
}
class Contents extends React.Component {
  render() {
    return ( 
        <div>
          <img src={this.props.src} />
          <p>{this.props.children}</p>
        </div>
        )
  }
}

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mang:[
              { src1: "image/3.png", noidung:"hello"},
                {src1: "image/2.png", noidung:"hoang"},
                {src1: "image/1.png", noidung:"hi"}
        ]
        };
      }
      add=()=>{
          this.state.mang.push( {src1: "image/4.png", noidung:"hoang"}, {src1: "image/5.png", noidung:"hoang"});// unShift Thêm vào đầu của mảng
          this.setState(this.state)
      }
     

  render(){
    return(
     <div>
       
         <button onClick={this.add}>Them</button>
   {
       this.state.mang.map((node,index)=>{
           return <Contents key={index} src={node.src1}>{node.noidung}</Contents>
       })
   }
     </div>
    )
}
}

class Note extends React.Component{
    delete=()=>{
      $.post("/delete",{XoaId: this.props.id},(data)=>{
        lisss.setState({didong:data})
      })
    }
    getInitialState(){
      return {onEdit: false}
    }
    edit=()=>{}
render(){
  if(this.state.onEdit){
<div className="div-note">
     <input defaultValue={ this.props.children} />
     <button onClick={()=>this.delete(this)}>Delete</button>
     <button onClick={()=>this.edit(this)}>Delete</button>
   </div>
  }else{
  return(
   <div className="div-note">
     <p>{ this.props.children}</p>
     <button onClick={()=>this.delete(this)}>Delete</button>
     <button onClick={()=>this.edit(this)}>Delete</button>
   </div>
  )
  }
}
}
function addDiv(){
  ReactDOM.render( <Inputdiv />,document.getElementById("addInput"))
}
var lisss;
class Lisss extends React.Component{
  
  constructor(props) {
      super(props);
       lisss=this;
      this.state = {
           didong:[]
      };
    }
    delete=()=>{
      $.post("/delete",{XoaId: this.props.key},(data)=>{
        lisss.setState({didong:data})
      })
    }
render(){
  return(
   <div className='div-div'>
     
     <div id="addInput"></div>
      <button onClick={addDiv}>Them</button>
      {
        this.state.didong.map((non,index)=>{
            return (<div> <Note key={index} id={index}>{non}</Note>
        
            </div>)
        })
      } 
   </div>
  )
}
componentDidMount(){
  var that = this
  $.post("/getNotes",(data)=>{
    that.setState({didong:data})
  })
}
}

class Inputdiv extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          
      };
    }
    send =()=>{
      $.post("/add",{note:this.refs.txt.value},(data)=>{
        lisss.setState({didong:data})
      })
      // lisss.setState({didong: lisss.state.didong.concat(this.refs.txt.value)})
      ReactDOM.unmountComponentAtNode(document.getElementById('addInput'))
    }
render(){
  return(
   <div id="AA">
       <input type="text" ref="txt" placeHolder="Vui lòng nhập"/>
       <button onClick={this.send}>Gửi</button>
   </div>
  )
}
}


ReactDOM.render( 
    <div>
        <Hoang ten="react" nguoilam='hoang' tongHocVien='10'>React JS</Hoang>
        <Hoang2 ten="nodejs" tongHocVien='10'> nODEJS </Hoang2>
        <Hoang3 />
        <InputTag />
        <InputTags />
        <Album />
        <Albums />
        <List />
        <Lisss />
        
        </div>
, document.getElementById("root"));