import { flex } from '../../../utils/styles/styles_utils';

const { center } = flex;

export const styles = ({ palette }) => ({
    container: {},
    imageContainer: {
        height: 110,
        width: 110,
        minHeight: 110,
        minWidth: 110,
        borderRadius: '100%',
        backgroundColor: palette.dark[500],
        overflow: 'hidden',
        ...center
    },
    image: {
        height: 'calc(100% + 2px)',
        width: 'calc(100% + 2px)',
        objectFit: 'cover'
    }
});
