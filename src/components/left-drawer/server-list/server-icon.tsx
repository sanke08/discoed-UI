import { data } from "@/lib/data";
import { TServerData } from "@/lib/types";
import useStore from "@/store";
import { Image, View } from "react-native";

export const ServerIcon = ({ data, icon }: { icon?: any; data: TServerData }) => {

    const { setServerData } = useStore()

    return (
        <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}
            onTouchEnd={() => setServerData(data)}
        >
            <View style={{ height: 50, width: 50, borderRadius: 50, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', }}>
                {
                    icon ?
                        icon :
                        <Image source={{ uri: data.image }} className=" w-full h-full" />
                }
            </View>
        </View>
    )
}