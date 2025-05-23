import { View, Text, Image } from 'react-native'
import React from 'react'
import { TChannel } from '@/lib/types';
import ThemedIcon from '@/components/ui/ThemedIcon';
import useStore from '@/store';
import { ThemedText } from '@/components/ui/ThemedText';

const ChannelItem = ({ data, image, closeDrawer }: { data: TChannel; image?: string, closeDrawer: () => void }) => {


    const { setChannelData } = useStore()

    const handleRouteData = React.useCallback(() => {
        setChannelData({ ...data, image: image })
        closeDrawer()
    }, [])

    return (
        <View onTouchEnd={handleRouteData} key={Math.floor(Math.random() * 9999999).toString()} style={{ width: '100%', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderRadius: 5 }}>
            {
                image != "" ?
                    <View style={{ width: 30, height: 30, borderRadius: 50, overflow: 'hidden' }}>
                        <Image source={{ uri: image }} className=' w-full h-full' />
                    </View> :
                    data.type == 'voice' ?
                        <ThemedIcon name={"sound"} type='Entypo' />
                        :
                        <ThemedIcon name={"hash"} type='Feather' />
            }
            <ThemedText style={{ fontSize: 15, marginLeft: 10 }}>{data.title}</ThemedText>
        </View>
    )
}

export default ChannelItem