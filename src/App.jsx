
import Accordion from "./components/Accordion";
const App = () => {
 
  const AccordianItems = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is Next.js?",
      content: "Next.js is a React framework for production.",
    },
    {
      title: "Why use Next.js?",
      content: "Next.js provides features like SSR, SSG, and API routes.",
    },
  ];
  return (
    <>
      <p className="font-extrabold my-5">Extrabold font weight</p>
      <Accordion singleOpen={true} showToggle={false}/>
     
    </>
  );
};
export default App;
