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
        backgroundColor: 'transparent',
        overflow: 'hidden',
        ...center
    },
    image: {
        height: '100%',
        width: '100%',
        objectFit: 'cover'
    }
});
