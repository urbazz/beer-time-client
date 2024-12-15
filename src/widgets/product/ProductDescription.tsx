import Paragraph from "antd/es/typography/Paragraph";

export const ProductDescription = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <Paragraph>
            {children}
        </Paragraph>
    );
};
