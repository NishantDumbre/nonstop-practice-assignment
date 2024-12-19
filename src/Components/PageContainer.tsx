import { ChildProps } from "../Models/childElement";

const PageContainer: React.FC<ChildProps> = ({
  staticElement,
  dynamicElement,
}) => {


  return (
    <div className="h-screen w-screen flex bg-indigo-500">
      <div className="flex flex-1 justify-center items-center">
        <div className="h-[90%] w-[80%] p-5 bg-red-500 rounded-lg ">
          {staticElement}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <div className="h-[90%] w-[80%] p-5 bg-red-500 rounded-lg ">
          {dynamicElement}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
