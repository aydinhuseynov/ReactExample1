import "../assets/header.css";

function Header(props) {
  const {name,age} = props;
  return (
    <div className='my-cover'>
      <h1>JSDABCJHDS HDCBA</h1>
      <p>nme: {name}</p>
      <p>age: {age}</p>
    </div>
  )
}
export default  Header;