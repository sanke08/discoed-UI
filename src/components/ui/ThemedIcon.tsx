import { getTheme } from '@/lib/theme';
import {
    Ionicons,
    FontAwesome,
    Feather,
    FontAwesome5, FontAwesome6, MaterialCommunityIcons, Entypo, MaterialIcons
} from '@expo/vector-icons'
import { StyleProp, TextStyle, useColorScheme } from 'react-native';



export type IconType = "Ionicons" | "FontAwesome" | "Feather" | "FontAwesome5" | "FontAwesome6" | "MaterialCommunityIcons" | "Entypo" | "MaterialIcons"

type IoniconsName = keyof typeof Ionicons.glyphMap;
type FontAwesomeName = keyof typeof FontAwesome.glyphMap;
type FeatherName = keyof typeof Feather.glyphMap;
type FontAwesome5Name = keyof typeof FontAwesome5.glyphMap;
type FontAwesome6Name = keyof typeof FontAwesome6.glyphMap;
type MaterialCommunityIconsName = keyof typeof MaterialCommunityIcons.glyphMap;
type EntypoName = keyof typeof Entypo.glyphMap;
type MaterialIconsName = keyof typeof MaterialIcons.glyphMap;

export type IconNameTypes = IoniconsName | FontAwesomeName | FeatherName | FontAwesome5Name | FontAwesome6Name | EntypoName | MaterialCommunityIconsName | MaterialIconsName

export type IconProps = {
    name: IconNameTypes
    color?: string;
    size?: number;
    type?: IconType;
    style?: StyleProp<TextStyle>;
};


const getIconComponent = (type: IconType) => {
    switch (type) {
        case 'FontAwesome':
            return FontAwesome;
        case 'Feather':
            return Feather;
        case 'FontAwesome5':
            return FontAwesome5;
        case 'FontAwesome6':
            return FontAwesome6;
        case 'Entypo':
            return Entypo;
        case 'MaterialCommunityIcons':
            return MaterialCommunityIcons;
        case 'MaterialIcons':
            return MaterialIcons;
        default:
            return Ionicons;
    }
};

export default function ThemedIcon({
    name,
    color,
    size = 24,
    type = 'Ionicons',
    ...rest
}: IconProps) {
    const theme = useColorScheme() ?? "dark"
    const IconComponent = getIconComponent(type);
    return <IconComponent name={name} size={size} color={color ?? getTheme[theme].icon.primary}  {...rest} />;
}