
// import required modules
import "./App.css";
import Index from "./pages";

const App = () => {

  const tabs= [
    {
      id: "tab1",
      title: "Tab 1",
      content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati modi quia neque delectus omnis provident aut eius molestias est a nulla, consequatur asperiores ut reiciendis enim minima officiis rerum quod corporis ipsum ad voluptate? Nulla placeat quidem expedita corrupti aliquid dolores quo labore totam animi quod facere vel culpa consequuntur ex sequi, saepe cumque eaque distinctio fuga quaerat nihil delectus. Voluptatum quae dolore magnam? Sunt ratione eos libero numquam minus quo, error eligendi blanditiis laboriosam dolores ullam consectetur repellat enim nihil itaque nostrum quasi accusamus, illum unde corporis illo quam, laborum cumque. Maiores suscipit labore obcaecati possimus aspernatur natus.</p>,
    },
    {
      id: "tab2",
      title: "Tab 2",
      content: <p>Hac habitasse platea dictumst quisque sagittis purus.</p>,
    },
    {
      id: "tab3",
      title: "Tab 3",
      content: <p>Libero id faucibus nisl tincidunt eget nullam non nisi.</p>,
    },
  ]
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Index />
    </div>
  );
};
export default App;
