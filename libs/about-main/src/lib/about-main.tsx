import { Greeting } from '@react-module-federation/shared-components';

/* eslint-disable-next-line */
export interface AboutMainProps {}

export function AboutMain(props: AboutMainProps) {
  return (
    <Greeting title='about'/>
  );
}

export default AboutMain;
