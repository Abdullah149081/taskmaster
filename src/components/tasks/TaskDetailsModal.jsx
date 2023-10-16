import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, togglerOpen, taskId }) => {
  const { task } = useSelector((state) => state.taskSlice);

  const details = task.find((item) => item.id === taskId);
  console.log(details, taskId);

  return (
    <Modal isOpen={isOpen} togglerOpen={togglerOpen}>
      <div>
        <h2>{details.title}</h2>
        <p>{details.description}</p>
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;
