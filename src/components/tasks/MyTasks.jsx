import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// TODO
const MyTasks = () => {
  const item = {
    id: 1,
    status: "pending",
    title: "Remove Button",
    description:
      "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
    date: "2023-08-28",
    assignedTo: "Mir Hussain",
    priority: "high",
  };

  return (
    <div>
      <h1 className="my-3 text-xl">My Tasks</h1>
      <div className=" h-[750px] space-y-3 overflow-auto">
        <div
          key={item.id}
          className="flex justify-between rounded-md bg-secondary/10 p-3"
        >
          <h1>{item.title}</h1>
          <div className="flex gap-3">
            <button className="grid place-content-center" title="Details">
              <DocumentMagnifyingGlassIcon className="h-5 w-5 text-primary" />
            </button>
            <button className="grid place-content-center" title="Done">
              <CheckIcon className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
