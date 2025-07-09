import cn from "@/lib/utils";
import { CustomButtonProps } from "@/type";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

const CustomButton = ({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false
}: CustomButtonProps) => {

  return (
    <TouchableOpacity className={cn("custom-btn", style)} onPress={onPress} disabled={isLoading}>
      {leftIcon}

      <View className="flex-center flex-row">
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text className={cn("text-white-100 paragraph-semibol", textStyle)}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
};

export default CustomButton;
