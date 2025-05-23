import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { TServerData } from '@/lib/types';
import { data } from '@/lib/data';
import { ServerIcon } from './server-icon';
import ThemedIcon from '@/components/ui/ThemedIcon';
import useStore from '@/store';

const ServerList = () => {
    const { setServerData } = useStore()

    const serverData = data as unknown as TServerData[];


    useLayoutEffect(() => {
        setServerData(serverData[1])
    }, [])
    return (
        <View className='w-1/4 justify-start'>
            <ServerIcon
                icon={<ThemedIcon name={"message"} type='MaterialCommunityIcons' />}
                data={serverData[0]}
            />
            {/* <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
                <View style={{ borderWidth: .5, borderColor: 'lightgray', width: '50%' }} />
            </View> */}
            {
                serverData.slice(1, serverData.length).map(server =>
                    <ServerIcon data={server} key={server.id} />
                )
            }
            <ServerIcon icon={<ThemedIcon name={"plus"} type='Feather' />} data={{} as TServerData} />
            <ServerIcon icon={<ThemedIcon name={"flow-tree"} type='Entypo' />} data={{} as TServerData} />
        </View>
    )
}

export default ServerList