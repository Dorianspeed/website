export type ContactInformationProps = {
  companyName: string;
  email: string;
  message: string;
  name: string;
};

export type ContactInformationPropsKey = keyof ContactInformationProps;

export type LabelProps = {
  position: number;
  title: string;
};
