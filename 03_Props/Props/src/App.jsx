

import Students from "./Students.jsx";

function App() {
  return (
    <>
    <Students name="Max" age={22} faculty = "BSc CSIT" isGraduated={true}></Students>
    <Students name="Leo" age={19} faculty = "BIT" isGraduated={false}/>
    <Students name="Tiger" age={21} faculty = "BIT" isGraduated={false}/>
    <Students name="Panther" age={23} faculty = "BTech" isGraduated={true}/>

    </>
  );
}

export default App
