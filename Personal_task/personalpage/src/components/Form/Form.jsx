import "../../index.css";

const Form = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-[200px]">
        <div className="">
          
        <input type="text" className="p-2 border-[2px] focus:ring-2 focus:ring-blue-500 rounded-[10px] border-[black] outline-black focus:outline-[bg-black]" placeholder="Name" />

        </div>

        <div>
         
          <input type="text" className="p-2 focus:ring-2 focus:ring-blue-500 border-[2px] rounded-[10px] border-[black] outline-black focus:outline-[bg-black]"  placeholder="Surname" />
        </div>

        <div>
          
          <input type="email" className="p-2 focus:ring-2 focus:ring-blue-500 border-[2px] rounded-[10px] border-[black] outline-black focus:outline-[bg-black]"  placeholder="Email" />
        </div>

        <div>
        
          <input type="file"   accept=".jpg, .jpeg, .png"  className="p-2  focus:ring-2 focus:ring-blue-500 border-[2px] rounded-[10px] border-[black] outline-black focus:outline-[bg-black]"  placeholder="File" />
        </div>
      </div>
    </>
  );
};
export default Form;
