import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import Link from 'next/link';

interface MenuItemProps {
  title : string;
  icon: 'icon-menu-card' | 'icon-menu-logout' | 'icon-menu-message' | 'icon-menu-overview' | 'icon-menu-reward' | 'icon-menu-setting' | 'icon-menu-transaction',
  active?: boolean,
  href: string
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
 title, icon, active, href,
} = props;

  const classItem = classNames({
    item: true,
    'mb-30': true,
    active,
    });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
