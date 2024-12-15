import Title from "antd/es/typography/Title";

export const ProductTitle = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <Title>{children}</Title>
    );
};