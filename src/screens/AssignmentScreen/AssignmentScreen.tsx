interface AssignmentProps {
  title: string
}

const AssignmentScreen: React.FC<AssignmentProps> = ({ title }) => {
  return (
    <h1 className="text-md">
      {title}
    </h1>
  )
}


export default AssignmentScreen;