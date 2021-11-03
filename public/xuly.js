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
    next =()=>{
        this.setState({hinh: this.state.hinh + 1})
    }
    prev =()=>{
        this.setState({hinh: this.state.hinh - 1})
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




ReactDOM.render( 
    <div>
        <Hoang ten="react" nguoilam='hoang' tongHocVien='10'>React JS</Hoang>
        <Hoang2 ten="nodejs" tongHocVien='10'> nODEJS </Hoang2>
        <Hoang3 />
        <InputTag />
        <InputTags />
        <Album />
        {/* <CustomTextInput /> */}
    </div>  //Cách 1: Class
    // <div><Hoang2 /></div> Cách 2: Function, không cần tạo element
    // element Cách 2: Function 
, document.getElementById("root"));