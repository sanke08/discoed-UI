import { getTheme } from '@/lib/theme';
import { Text, useColorScheme, type TextProps } from 'react-native';
import { twMerge } from 'tailwind-merge';

export function ThemedText({ className, style, ...rest }: TextProps) {
    const theme = useColorScheme() ?? "dark"
    return (
        <Text
            className={twMerge(" dark:text-white text-black", className,)}
            style={[{ color: getTheme[theme].text.primary }, style]}
            {...rest}
        />
    );
}