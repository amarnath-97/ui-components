import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import Pagination from "./components/Pagination";
import ToggeleButton from "./components/ToggeleButton";
import Test from './components/Test';
import {data} from './data'; 

function App() {
  const [isDark, setIsDark] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div
      className={`App w-full h-screen p-5 ${
        isDark ? "bg-slate-900" : "bg-gray-100"
      }`}
    >
      {/* props ---> checked, onChange, color(tailwind class), bgColor(tailwind class), variant(sm, md, lg) */}

      <div className="flex items-center gap-2 mb-4">
        <ToggeleButton
          checked={isDark}
          onChange={setIsDark}
          bgColor={"bg-[#fcba03]"}
          variant="lg"
        />
        <label>Large</label>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <ToggeleButton
          checked={isDark}
          onChange={setIsDark}
          bgColor="bg-blue-300"
          variant="md"
        />
        <label>Medium</label>
      </div>

      <div className="flex items-center gap-2 mb-5">
        <ToggeleButton checked={show} onChange={setShow} />
        <label>Small</label>
      </div>
      {show && <h1 className="text-2xl">Welcome</h1>}

      {/* {
        data.map(item => <Accordion key={item.id} item= {item}/>)
      } */}

      <Accordion/>
    </div>
  );
}

export default App;
