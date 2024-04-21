export interface TPersonFormsData {
    name: string;
    socialName: string;
    birthDate: string;
    biologicalSex: string;
    gender: string;
    LGBTQIA: string;
    ethnicity: string;
    id: string;
    cpf: string;
    neighborhood: string;
    address: string;
    number: string;
    complement: string;
    phone: string;
    email: string;
}

export interface TFormErrors {
    nameErr: boolean;
    dateOfBirthErr: boolean;
    biologicalSexErr: boolean;
    ethnicityErr: boolean;
    idErr: boolean;
    cpfErr: boolean;
    neighborhoodErr: boolean;
    addressErr: boolean;
}