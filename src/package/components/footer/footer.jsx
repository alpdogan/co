import React, { memo } from 'react';

import cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { FormattedMessage } from 'react-intl';

import { Tooltip } from '@welovedevs/ui';
import { useMediaQuery } from '@material-ui/core';

import { ShareLinks } from './share_links/share_links';

import { ReactComponent as LinkedinLogo } from '../../assets/icons/brands/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/icons/brands/github.svg';

import { styles } from './footer_styles';

const useStyles = createUseStyles(styles);

const FooterComponent = () => {
    const classes = useStyles();
    const { screenSizes } = useTheme();

    const useSmallLayout = useMediaQuery(
        `(max-width: ${screenSizes.medium - (screenSizes.medium - screenSizes.small) / 2}px)`,
        { defaultMatches: true }
    );

    if (useSmallLayout) {
        return (
            <div className={cn(classes.container, useSmallLayout && classes.smallLayoutContainer)}>
                <div className={classes.wldLogoGithubLogoContainer}>
                    <Tooltip
                        title={
                            <FormattedMessage
                                id="Footer.linkedin.tooltip"
                                defaultMessage="Follow me"
                            />
                        }
                    >
                        <a
                            className={classes.logoLink}
                            href="https://www.linkedin.com/in/alpdogan"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <LinkedinLogo className={classes.githubLogo} />
                        </a>
                    </Tooltip>
                    <Tooltip
                        title={
                            <FormattedMessage
                                id="Footer.github.tooltip"
                                defaultMessage="Thanks for your stars"
                            />
                        }
                    >
                        <a
                            className={classes.githubLink}
                            href="https://github.com/alpdogan/co"
                            target="_bank"
                            rel="noreferer noopener"
                        >
                            <GithubLogo className={classes.githubLogo} />
                        </a>
                    </Tooltip>
                </div>
                <ShareLinks useSmallLayout />
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <Tooltip
                title={
                    <FormattedMessage id="Footer.linkedin.tooltip" defaultMessage="Follow me" />
                }
            >
                <a className={classes.logoLink} href="https://www.linkedin.com/in/alpdogan" target="_blank" rel="noreferrer noopener">
                    <LinkedinLogo className={classes.githubLogo} />
                </a>
            </Tooltip>
            <ShareLinks />
            <Tooltip
                title={
                    <FormattedMessage id="Footer.github.tooltip" defaultMessage="Thanks for your stars" />
                }
            >
                <a
                    className={classes.githubLink}
                    href="https://github.com/alpdogan/co"
                    target="_bank"
                    rel="noreferer noopener"
                >
                    <GithubLogo className={classes.githubLogo} />
                </a>
            </Tooltip>
        </div>
    );
};

export const Footer = memo(FooterComponent);
