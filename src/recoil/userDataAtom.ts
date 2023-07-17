import { atom } from 'recoil';

export const userDataAtom = atom({
    key: 'userData',
    default: { user_name: '' },
});
