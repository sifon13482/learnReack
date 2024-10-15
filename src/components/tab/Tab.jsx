export const Tab = ({ titleTab, isActiv, onClick }) => {
  return (
    <button disabled={isActiv} onClick={onClick}>
      {titleTab}
    </button>
  );
};
