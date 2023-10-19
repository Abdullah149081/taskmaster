import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

const TaskDetailsModal = ({ isOpen, togglerOpen, taskId }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);

  const task = tasks.find((item) => item.id === taskId);

  return (
    <Modal isOpen={isOpen} togglerOpen={togglerOpen} title={task?.title}>
      {task?.description}
    </Modal>
  );
};

export default TaskDetailsModal;
