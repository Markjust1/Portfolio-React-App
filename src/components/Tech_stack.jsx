import "./Tech_stack.css";

function Tech_stack() {
  const frontend = ['React', 'Javascript', 'HTML', 'CSS'];
  const backend = ['Node.js', 'Express.js', 'PostgreSQL', 'Ruby on Rails'];
  const listStack = () => {
    frontend.forEach((element) => {
      return <li>{element}</li>
    })
  }

  return (
    <div>
      <ul>{listStack}</ul>
      {/* <ul>{<li>listStack</li>}</ul> */}
    </div>
  );
}

export default Tech_stack;