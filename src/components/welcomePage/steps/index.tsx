import { stepsComponent } from "@/utils/arrays/steps-component";
import { Text, View } from "react-native";
import { Step } from "./step";
import { s } from "./style";

export const Steps = () => (
  <View style={s.container}>
    <Text style={s.title}>Veja como funciona:</Text>
    {stepsComponent.map((step, index) => (
      <Step
        key={`step-${index}`}
        title={step.title}
        description={step.description}
        icon={step.icon}
      />
    ))}
  </View>
);
