import * as Yup from 'yup';

export const StoryGameValidationSchema = () =>
    Yup.object({
        embedUrl: Yup.string().max(250).url().required()
    });

export const validateStoryGameComplete = (data) => {
    try {
        StoryGameValidationSchema().validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
