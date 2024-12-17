import { TButtonProps } from "@/@core/types/button-props";
import { TIconProps } from "@/@core/types/icon-props";
import { colors } from "@/styles/colors";
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
} from "react-native";
import { s } from "./style";

const Button = ({
  children,
  style,
  isLoading = false,
  ...rest
}: TButtonProps) => (
  <TouchableOpacity
    style={[s.container, style]}
    activeOpacity={0.8}
    disabled={isLoading}
    {...rest}
  >
    {isLoading ? (
      <ActivityIndicator size="small" color={colors.gray[100]} />
    ) : (
      children
    )}
  </TouchableOpacity>
);

const Title = ({ children }: TextProps) => (
  <Text style={s.title}>{children}</Text>
);

const Icon = ({ icon: Icon }: TIconProps) => (
  <Icon size={24} color={colors.gray[100]}></Icon>
);

Button.Title = Title;
Button.Icon = Icon;

export { Button };
