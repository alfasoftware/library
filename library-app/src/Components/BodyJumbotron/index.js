import React from "react";
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/BodyJumbotron";

export default function BodyJumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

BodyJumbotron.Container = function JumbotronContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>;
};

BodyJumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

BodyJumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

BodyJumbotron.SubTitle = function JumbotronSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

BodyJumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
