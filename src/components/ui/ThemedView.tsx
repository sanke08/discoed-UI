import { View, useColorScheme, type ViewProps } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '@/lib/theme';
;

export function ThemedView({ className, style, ...rest }: ViewProps) {
    const theme = useColorScheme() ?? 'light';

    return (
        <View
            className={twMerge(className)}
            style={[{ backgroundColor: getTheme[theme].background.default }, style]}
            {...rest}
        />
    );
}
