import { definePropType } from '@eui/utils'

type HeaderMenuNavs = {
  value: string
  linkTo: string
}

export const headerMenuProps = {
  navs: {
    type: definePropType<HeaderMenuNavs[]>(Array),
    required: true,
  },
  menuLockerRefs: {
    type: definePropType<HTMLElement[] | null>(Array),
    default: null,
  },
}
