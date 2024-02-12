
'use cleint';

import React from 'react';
import styles from './Header.module.scss'
import { useDeviceType } from '@/modules/general/libraries/device-type';

export default function Header() {
  const deviceType = useDeviceType()

  return (
    <div className={styles.root}>      
    </div>
  );
}