export const Tab = ({ titleTab, isActiv, onClick }) => {
  <button disabled={isActiv} onClick={onClick}>
    {titleTab}
  </button>;
};
