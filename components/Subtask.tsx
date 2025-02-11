import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Paragraph, Space } from "@solved-ac/ui-react";
import { IoCubeOutline } from "react-icons/io5";

const SubtaskContainer = styled.dd`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 0 16px;
`;

interface Props {
  children?: React.ReactNode;
  index: number;
  score: number;
}

export const Subtask: React.FC<Props> = (props) => {
  const theme = useTheme();
  const { score, index, children } = props;

  return (
    <SubtaskContainer>
      <span>
        <Paragraph style={{ fontFeatureSettings: "'tnum' 1" }}>
          <IoCubeOutline color={theme.color.text.secondary.main} />
          <Space w={4} as="span" />
          <b>종류 {index}</b>: {score}점
        </Paragraph>
      </span>
      <span>{children}</span>
    </SubtaskContainer>
  );
};
