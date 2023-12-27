import React, { useCallback, useContext, useMemo } from 'react';

import { ProfileCard } from '../../../commons/profile_card/profile_card';
import { StoryGameFront } from './storygame_front/storygame_front';
import { StoryGameBack } from './storygame_back/storygame_back';
import { FlatObjectToJsonResume, JsonResumeToFlatObject } from '../../utils/data_mapping';
import { StoryGameMapping } from './data/mapping';
import { DeveloperProfileContext } from '../../../../utils/context/contexts';
import { SIDES } from '../../../commons/profile_card/profile_card_side/side';
import { useMode } from '../../../hooks/use_mode';
import { validateStoryGameComplete } from './data/validator';

const StoryGameCardComponent = ({ variant, side }) => {
    const [mode] = useMode();
    const { data, isEditing } = useContext(DeveloperProfileContext);
    const mappedData = useMemo(() => JsonResumeToFlatObject(data, StoryGameMapping), [data]);
    const isComplete = useMemo(() => validateStoryGameComplete(mappedData), [mappedData]);


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
            kind="storygame"
            isComplete={isComplete}
            isEditingProfile={isEditing}
            data={mappedData}
            sides={{
                front: (props) => <StoryGameFront {...props} />,
                back: (props) => <StoryGameBack {...props} />
            }}
            variant={variant}
            side={currentSide}
            ignoreMouseLeave={true}
        />
    );
};

export const StoryGameCard = StoryGameCardComponent;
