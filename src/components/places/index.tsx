import { IPlacesProps } from "@/core/interfaces/places-props";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { useWindowDimensions } from "react-native";
import { Place } from "./place";

export const Places = ({ data }: IPlacesProps) => {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <BottomSheet>
      <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Place data={item} />}
      />
    </BottomSheet>
  );
};
