import { IconProps } from "@tabler/icons-react-native";

export interface IStepProps {
    title: string,
    description: string,
    icon?: React.ComponentType<IconProps>
}