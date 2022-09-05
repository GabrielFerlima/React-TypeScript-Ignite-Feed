import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProbs extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...probs }: AvatarProbs) {
   
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        {...probs}
        />
    );
}