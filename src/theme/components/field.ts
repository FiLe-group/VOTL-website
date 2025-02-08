import {defineSlotRecipe} from "@chakra-ui/react";

export const fieldSlotRecipe = defineSlotRecipe({
    slots: ['root','label','errorText','helperText'],
    base: {
        root: {
            direction: 'column',
            bg: '{colors.cardBg}',
            rounded: '3xp',
            p: '5',
            boxShadow: 'md',
        },
        label: {
            fontSize: {
                base: '16px',
                md: 'lg',
            },
            fontWeight: 'medium',
            mb: '0'
        },
        helperText: {
            fontSize: {
                base: 'sm',
                md: 'md',
            },
            color: '{colors.textSecondary}',
            mb: 2,
        }
    }
})