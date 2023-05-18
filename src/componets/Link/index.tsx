type Props = {
  label: string;
  className?: string;
  onClick: () => void;
};

export const Link = (props: Props) => {
  return (
    <div
      className="text-blue-800 hover:text-blue-500 text-md hover:underline cursor-pointer"
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
};
