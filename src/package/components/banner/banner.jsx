import React, { memo } from 'react';

import cn from 'classnames';
import { createUseStyles } from 'react-jss';
import { FormattedMessage } from 'react-intl';
import { AnimatePresence, motion } from 'framer-motion';

import { Typography } from '@welovedevs/ui';

import { UserInformations } from './user_actions_row/user_informations/user_informations';
import { SocialActions } from './user_actions_row/social_actions/social_actions';
import { CustomizeButton } from './user_actions_row/customize_button/customize_button';
import { EditHeaderImageButton } from './edit_header_image_button/edit_header_image_button';

import { OPACITY_TRANSITIONS } from '../../utils/framer_motion/common_transitions/opacity_transitions';

import { useIsEditing } from '../hooks/use_is_editing';
import { useAdditionalNodes } from '../hooks/use_additional_nodes';
import { useReceivedGlobalClasses } from '../hooks/use_received_global_classes';

import { styles } from './banner_styles';
import { useMode } from '../hooks/use_mode';
import { EditButton } from './user_actions_row/edit_button/edit_button';

const useStyles = createUseStyles(styles);

const BannerComponent = ({ customizationOptions, onCustomizationChanged }) => {
    const classes = useStyles();
    const [mode] = useMode();
    const [actionsButtons] = useAdditionalNodes('banner.actionsButtons', null);
    const [globalReceivedBannerClasses = {}] = useReceivedGlobalClasses('banner');
    const [isEditing] = useIsEditing();

    const imageInformations = customizationOptions?.imageHeader;
    const bannerImageCredits = customizationOptions?.imageHeader?.credits;

    return (
        <div className={cn(classes.container, globalReceivedBannerClasses.container)}>
            {isEditing && onCustomizationChanged && (
                <EditHeaderImageButton customizationOptions={customizationOptions} />
            )}
            <div className={cn(classes.overlay, globalReceivedBannerClasses.overlay)} />
            <AnimatePresence>
                {/* <div className={"noise pattern"}></div> */}

                <div className={"pattern"}>
                    <svg version="1.1" id="banner-anim" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 1820 1080" style={{enableBackground:"new 0 0 1820 1080"}} xmlXSpace="preserve">

                    <g id="banner-container">
                        <defs>
                            <rect id="masque" y="0.4" width="1820" height="1080"/>
                        </defs>
                        <clipPath id="cache">
                            <use xlinkHref="#masque"  style={{"overflow":"visible"}}/>
                        </clipPath>
                        <g id="banner-light-blue">
                            <line x1="630.8" y1="894.3" x2="476.3" y2="1048.8"/>
                            <line x1="858.2" y1="823.9" x2="1012.7" y2="669.4"/>
                            <line x1="1066.9" y1="458.2" x2="912.4" y2="612.7"/>
                            <line x1="1294.3" y1="387.8" x2="1448.8" y2="233.3"/>
                            <line x1="1503" y1="22.1" x2="1348.5" y2="176.6"/>
                            <line x1="895.6" y1="1166.6" x2="1050.1" y2="1012.1"/>
                            <line x1="1104.3" y1="800.9" x2="949.8" y2="955.4"/>
                            <line x1="1331.7" y1="730.5" x2="1486.2" y2="576"/>
                            <line x1="1540.4" y1="364.8" x2="1385.9" y2="519.3"/>
                            <line x1="1767.8" y1="294.4" x2="1922.3" y2="139.9"/>
                            <line x1="1976.5" y1="-71.3" x2="1822" y2="83.2"/>
                            <line x1="1369.1" y1="1073.2" x2="1523.6" y2="918.7"/>
                            <line x1="1577.8" y1="707.5" x2="1423.3" y2="862"/>
                            <line x1="1805.2" y1="637.1" x2="1959.7" y2="482.6"/>
                            <line x1="1624" y1="1041.4" x2="1469.4" y2="1195.9"/>
                            <line x1="-134.7" y1="674.9" x2="19.8" y2="520.4"/>
                            <line x1="74" y1="309.2" x2="-80.5" y2="463.7"/>
                            <line x1="301.4" y1="238.8" x2="455.9" y2="84.3"/>
                            <line x1="510.1" y1="-126.9" x2="355.6" y2="27.6"/>
                            <line x1="-88.6" y1="1008.9" x2="65.9" y2="854.4"/>
                            <line x1="120.1" y1="643.1" x2="-34.4" y2="797.7"/>
                            <line x1="347.5" y1="572.8" x2="502" y2="418.3"/>
                            <line x1="556.2" y1="207.1" x2="401.7" y2="361.6"/>
                            <line x1="783.6" y1="136.7" x2="938.1" y2="-17.8"/>
                            <line x1="157.6" y1="985.8" x2="3" y2="1140.3"/>
                            <line x1="384.9" y1="915.5" x2="539.4" y2="760.9"/>
                            <line x1="593.6" y1="549.7" x2="439.1" y2="704.3"/>
                            <line x1="821" y1="479.4" x2="975.5" y2="324.9"/>
                            <line x1="1029.7" y1="113.6" x2="875.2" y2="268.2"/>
                            <line x1="1257.1" y1="43.3" x2="1411.6" y2="-111.2"/>
                        </g>
                        <g id="banner-white">
                            <line x1="794.4" y1="883.4" x2="639.8" y2="1037.9"/>
                            <line x1="694.6" y1="834.8" x2="849.2" y2="680.3"/>
                            <line x1="1230.4" y1="447.3" x2="1075.9" y2="601.8"/>
                            <line x1="1130.7" y1="398.7" x2="1285.2" y2="244.2"/>
                            <line x1="1666.5" y1="11.2" x2="1512" y2="165.7"/>
                            <line x1="732" y1="1177.5" x2="886.6" y2="1023"/>
                            <line x1="1267.9" y1="790" x2="1113.3" y2="944.5"/>
                            <line x1="1168.1" y1="741.4" x2="1322.7" y2="586.9"/>
                            <line x1="1703.9" y1="353.9" x2="1549.4" y2="508.4"/>
                            <line x1="1604.2" y1="305.3" x2="1758.7" y2="150.8"/>
                            <line x1="1205.5" y1="1084.1" x2="1360.1" y2="929.6"/>
                            <line x1="1741.4" y1="696.5" x2="1586.8" y2="851.1"/>
                            <line x1="1641.6" y1="648" x2="1796.2" y2="493.5"/>
                            <line x1="1787.5" y1="1030.5" x2="1633" y2="1185"/>
                            <line x1="1687.8" y1="981.9" x2="1842.3" y2="827.4"/>
                            <line x1="200.1" y1="-44.4" x2="45.6" y2="110.1"/>
                            <line x1="237.5" y1="298.3" x2="83" y2="452.8"/>
                            <line x1="137.8" y1="249.7" x2="292.3" y2="95.2"/>
                            <line x1="673.6" y1="-137.8" x2="519.1" y2="16.7"/>
                            <line x1="283.7" y1="632.2" x2="129.2" y2="786.8"/>
                            <line x1="184" y1="583.7" x2="338.5" y2="429.2"/>
                            <line x1="719.8" y1="196.2" x2="565.2" y2="350.7"/>
                            <line x1="620" y1="147.6" x2="774.6" y2="-6.9"/>
                            <line x1="321.1" y1="974.9" x2="166.6" y2="1129.4"/>
                            <line x1="221.4" y1="926.4" x2="375.9" y2="771.8"/>
                            <line x1="757.2" y1="538.8" x2="602.7" y2="693.4"/>
                            <line x1="657.5" y1="490.3" x2="812" y2="335.8"/>
                            <line x1="1193.3" y1="102.7" x2="1038.7" y2="257.3"/>
                            <line x1="1093.5" y1="54.2" x2="1248.1" y2="-100.3"/>
                        </g>
                        <g id="banner-blue">
                            <line x1="225.8" y1="1151" x2="534.9" y2="841.9"/>
                            <line x1="827.1" y1="1003.3" x2="518" y2="1312.3"/>
                            <line x1="661.9" y1="714.9" x2="971" y2="405.9"/>
                            <line x1="1263.1" y1="567.2" x2="954.1" y2="876.3"/>
                            <line x1="1098" y1="278.8" x2="1407.1" y2="-30.2"/>
                            <line x1="1699.2" y1="131.1" x2="1390.2" y2="440.2"/>
                            <line x1="699.3" y1="1057.6" x2="1008.4" y2="748.5"/>
                            <line x1="1300.6" y1="909.9" x2="991.5" y2="1218.9"/>
                            <line x1="1135.4" y1="621.5" x2="1444.5" y2="312.4"/>
                            <line x1="1736.6" y1="473.8" x2="1427.6" y2="782.8"/>
                            <line x1="1571.5" y1="185.4" x2="1880.6" y2="-123.6"/>
                            <line x1="1172.8" y1="964.2" x2="1481.9" y2="655.1"/>
                            <line x1="1774.1" y1="816.5" x2="1465" y2="1125.5"/>
                            <line x1="1608.9" y1="528.1" x2="1918" y2="219"/>
                            <line x1="1219" y1="1298.1" x2="1528" y2="989.1"/>
                            <line x1="1655.1" y1="862" x2="1964.1" y2="553"/>
                            <line x1="232.8" y1="75.5" x2="-76.2" y2="384.6"/>
                            <line x1="270.2" y1="418.2" x2="-38.8" y2="727.3"/>
                            <line x1="105.1" y1="129.8" x2="414.2" y2="-179.2"/>
                            <line x1="706.3" y1="-17.9" x2="397.3" y2="291.2"/>
                            <line x1="-284.8" y1="899.9" x2="24.2" y2="590.8"/>
                            <line x1="316.4" y1="752.2" x2="7.3" y2="1061.2"/>
                            <line x1="151.3" y1="463.8" x2="460.3" y2="154.7"/>
                            <line x1="752.5" y1="316.1" x2="443.4" y2="625.1"/>
                            <line x1="587.3" y1="27.7" x2="896.4" y2="-281.4"/>
                            <line x1="1188.6" y1="-120" x2="879.5" y2="189"/>
                            <line x1="-247.4" y1="1242.5" x2="61.6" y2="933.5"/>
                            <line x1="188.7" y1="806.4" x2="497.7" y2="497.4"/>
                            <line x1="789.9" y1="658.8" x2="480.8" y2="967.8"/>
                            <line x1="624.8" y1="370.4" x2="933.8" y2="61.3"/>
                            <line x1="1226" y1="222.7" x2="916.9" y2="531.7"/>
                            <line x1="1662.1" y1="-213.4" x2="1353" y2="95.6"/>
                        </g>
                    </g>
                    </svg>
                </div>


                {/* {imageInformations && (
                    <motion.img
                        className={classes.image}
                        src={imageInformations?.url}
                        alt={imageInformations?.alt}
                        variants={OPACITY_TRANSITIONS}
                        transition={{ duration: 1 }}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />
                )} */}
            </AnimatePresence>
            <div className={cn(classes.content, globalReceivedBannerClasses.content)}>
                <UserInformations />
                <SocialActions>
                    <div style={{display: "none"}}>
                        {actionsButtons}
                        {mode === 'edit' && <EditButton />}
                        {mode === 'edit' && <CustomizeButton customizationOptions={customizationOptions} />}
                    </div>
                    <div className={"social-container"}>
                        <a href={"https://github.com/alpdogan/co"} target={"_blank"}>
                            <svg fill="#5c7273" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                        </a>
                    </div>
                </SocialActions>
            </div>
            {bannerImageCredits?.name && (
                <Typography
                    classes={{ container: cn(classes.credits, globalReceivedBannerClasses.credits) }}
                    variant="body3"
                >
                    <FormattedMessage
                        id="Unsplash.credit"
                        defaultMessage="Photo by {name} on {unsplashLink}"
                        values={{
                            name: (
                                <a
                                    className={classes.author}
                                    href={bannerImageCredits.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={bannerImageCredits.name}
                                >
                                    {bannerImageCredits.name}
                                </a>
                            ),
                            unsplashLink: (
                                <a
                                    href={encodeURI(
                                        'https://unsplash.com/?utm_source=W3D Developer Profile&utm_medium=referral'
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FormattedMessage id="Unsplash.brandName" defaultMessage="Unsplash" />
                                </a>
                            )
                        }}
                    />
                </Typography>
            )}
        </div>
    );
};

export const Banner = memo(BannerComponent);
