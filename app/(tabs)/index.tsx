import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import cn from "@/lib/utils";
import useAuthStore from "@/store/auth.store";
import { Fragment } from "react";
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { user } = useAuthStore();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        contentContainerClassName="pb-28 px-5"
        ListHeaderComponent={() => (
          <View className="w-full flex-between flex-row my-5">
            <View className="flex-start">
              <Text className="small-bold text-primary">DELIVER TO</Text>
              <TouchableOpacity className="flex-center flex-row gap-x-1 mt-0.5">
                <Text className="paragraph-bold text-dark-100">Lebanon</Text>
                <Image source={images.arrowDown} className="size-3" resizeMode="contain" />
              </TouchableOpacity>
            </View>
            <CartButton />
          </View>
        )}
        data={offers}
        renderItem={({ item, index }) => {
          const { id, color, image, title } = item;
          const isEven = index % 2 === 0;
          return (
            <View key={id}>
              <Pressable
                className={cn("offer-card", isEven ? "flex-row-reverse" : "flex-row")}
                style={{ backgroundColor: color }}
                android_ripple={{ color: "#ffffff22" }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className="h-full w-1/2">
                      <Image source={image} className="size-full" resizeMode="contain" />
                    </View>

                    <View className={cn("offer-card__info", isEven ? "pl-10" : "pr-10")}>
                      <Text className="h1-bold text-white leading-tight">
                        {title}
                      </Text>
                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor="#FFF"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          )
        }}
      />
    </SafeAreaView>
  );
}
