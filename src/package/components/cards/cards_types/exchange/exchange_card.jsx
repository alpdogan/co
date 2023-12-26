import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { ExchangeFront } from './exchange_front/exchange_front';
import { ExchangeBack } from './exchange_back/exchange_back';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { ExchangeMapping } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';
import { useMode } from '../../../hooks/use_mode';
import { validateExchangeComplete } from './data/validator';

const ExchangeCardComponent = ({ variant, side }) => {
    const [mode] = useMode();
    const { data, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, ExchangeMapping), [data]);
    const isComplete = useMemo(() => validateExchangeComplete(mappedData), [mappedData]);


    const currentSide = useMemo(() => {
        if (!isComplete && !isEditing) {
            return SIDES.FRONT;
        }
        return side;
    }, [side, isComplete, isEditing]);

    if (!isComplete && mode !== 'edit') {
        return null;
    }

    return (
        <ProfileCard
            kind="exchange"
            isComplete={isComplete}
            isEditingProfile={isEditing}
            data={mappedData}
            sides={{
                front: (props) => <ExchangeFront {...props} />,
                back: (props) => <ExchangeBack {...props} />
            }}
            variant={variant}
            side={currentSide}
            ignoreMouseLeave={true}
        />
    );
};

export const ExchangeCard = ExchangeCardComponent;
