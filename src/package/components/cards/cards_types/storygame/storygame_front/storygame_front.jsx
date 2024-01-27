import React, { memo, useCallback } from 'react';

import { FormattedMessage } from 'react-intl';
import { createUseStyles } from 'react-jss';

import { Typography } from '@welovedevs/ui';
import { ProfileCardPaddedFront } from '../../../../commons/profile_card/profile_card_padded_front/profile_card_padding_front';
import { CenterContentContainer } from '../../../../commons/center_content_container/center_content_container';
import { ProfileCardFrontVector } from '../../../../commons/profile_card/profile_card_front_vector/profile_card_front_vector';
import { ProfileCardFrontTypography } from '../../../../commons/profile_card/profile_card_front_typography/profile_card_front_typography';
import { ProfileCardActions } from '../../../../commons/profile_card/profile_card_actions/profile_card_actions';
import { ProfileCardButton } from '../../../../commons/profile_card/profile_card_button/profile_card_button';

// import { ReactComponent as StoryGameLogo } from '../../../../../assets/icons/brands/token.svg';
import { ReactComponent as Dice } from '../../../../../assets/icons/brands/dice.svg';

import { SIDES } from '../../../../commons/profile_card/profile_card_side/side';

import { styles } from './storygame_front_styles';
import { useCardSide } from '../../../../hooks/profile_card_hooks/use_card_side';

const useStyles = createUseStyles(styles);

const StoryGameFrontComponent = ({ data, handleAddButtonClick }) => {
    const classes = useStyles();
    const [side, setSide] = useCardSide();

    const handleButtonClick = useCallback(() => setSide(side === SIDES.FRONT ? SIDES.BACK : SIDES.FRONT), [
        side,
        setSide
    ]);

    return (
        <>
            <ProfileCardPaddedFront>
                <CenterContentContainer classes={{ container: classes.container }}>
                    <Content {...{ data, handleAddButtonClick, classes }} />
                </CenterContentContainer>
            </ProfileCardPaddedFront>
            {data?.embedUrl && (
                <ProfileCardActions>
                    <ProfileCardButton onClick={handleButtonClick}>
                        <FormattedMessage id="StoryGame.front.button" defaultMessage="Book a call" />
                    </ProfileCardButton>
                </ProfileCardActions>
            )}
        </>
    );
};

const Content = ({ data, handleAddButtonClick, classes }) => {
    if (!data?.embedUrl) {
        return <React.Fragment></React.Fragment>
    }
    return (
        <>
            <ProfileCardFrontVector classes={{ container: classes.logo }} vector={Dice} />
            <ProfileCardFrontTypography classes={{ container: classes.typography }}>
                <FormattedMessage id="StoryGame.front.title" defaultMessage="Let's Connect!" />
            </ProfileCardFrontTypography>
            <p style={{margin:0, fontStyle:"italic"}} id="StoryGame.front.desc">Schedule a call with me to discuss your ideas, projects, or any inquiries. I look forward to chatting with you.</p>
        </>
    );
};

export const StoryGameFront = memo(StoryGameFrontComponent);
