import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div>
        {children}
      </div>
    </div>
  );
};

export default Container;
