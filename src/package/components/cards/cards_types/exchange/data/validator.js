import * as Yup from 'yup';

export const ExchangeValidationSchema = () =>
    Yup.object({
        embedUrl: Yup.string().max(250).url().required()
    });

export const validateExchangeComplete = (data) => {
    try {
        ExchangeValidationSchema().validateSync(data);
    } catch (e) {
        return false;
    }
    return true;
};
