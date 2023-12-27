import { createScreenWidthMediaQuery } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const {
        miscellaneous: { spacing }
    } = theme;
    return {
        container: {
            flexDirection: 'column'
        },
        logo: {
            marginBottom: spacing * 4,
            '& > path': {
                fill: 'currentColor'
            }
        },
        typography: {
            fontSize: 24,
            lineHeight: 1.2
        },
        desc: {
            fontSize: 16,
            lineHeight: 1.2,
            fontWeight: "400",
            fontStyle: "italic",
            h2: {
                margin: 0
            }
        },
        addButton: {
            marginTop: spacing * 4,
            marginLeft: -spacing
        },
        [createScreenWidthMediaQuery('max-width', theme.screenSizes.small)]: {
            typography: {
                maxWidth: 'unset',
                fontSize: 28
            }
        }
    };
};
