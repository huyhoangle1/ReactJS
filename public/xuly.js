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
          tongHocVien:10
        };
      }
  
    render(){
      return (
      <div><h1 className="mauvang">{this.props.ten}</h1>
      <p>{this.props.children}</p>
      <button onClick={()=>{var str=(this.props.ten)+ ' ' + this.props.children;getname(str)}}>THÔNG TIN</button>
      <button onClick={()=>{ this.setState({tongHocVien: this.state.tongHocVien+ 1})}}>Thêm học viên</button>
      <p>So hoc vien: {this.state.tongHocVien}</p>
      </div>
    );
 }
}

function Hoang3 (){
    return  <h1 className="mauvang">Demo Reactjs function </h1>;    
}
const element = <Hoang2 /> 

ReactDOM.render( 
    <div>
        <Hoang ten="react" nguoilam='hoang'>React JS</Hoang>
        <Hoang2 ten="nodejs"> nODEJS </Hoang2>
        <Hoang2 ten="nodejs"> nODEJS </Hoang2>
        <Hoang3 />
    </div>  //Cách 1: Class
    // <div><Hoang2 /></div> Cách 2: Function, không cần tạo element
    // element Cách 2: Function 
, document.getElementById("root"));