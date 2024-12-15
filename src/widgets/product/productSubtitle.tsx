import Title from "antd/es/typography/Title";

export const ProductSubtitle = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <Title 
            level={2}
            type='secondary'
        >{children}</Title>
    );
};