import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { s } from "./style";

const Button = ({ children, style }: TouchableOpacityProps) => (
  <TouchableOpacity style={[s.container, style]} activeOpacity={0.8}>
    {children}
  </TouchableOpacity>
);

const Title = ({ children }: TextProps) => (
  <Text style={s.title}>{children}</Text>
);

Button.Title = Title;

export { Button };
